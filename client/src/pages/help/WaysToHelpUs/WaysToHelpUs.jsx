import { useState, useEffect, useRef, useCallback } from 'react';
import {
  WaysToHelpUsCommonInfo,
  WaysToHelpUsContainer,
  WaysToHelpUsGridContainer,
  WaysToHelpUsHeading,
  WaysToHelpUsImage,
  SupportButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  DonationSection,
  DonationInput,
  GameSection,
  HappinessBar,
  HappinessFill,
  RewardSection,
  Button,
  RewardItem,
  ModalSectionHeading,
  GoalReachedText,
} from './styled.js';
import WaysToHelpUsItem from './WaysToHelpUsItem/WaysToHelpUsItem.jsx';
import MiniGame from './MiniGame.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import Lottie from 'lottie-react';
import veryHappy from './Animations/VeryHappyDogAnimation.json';
import happy from './animations/HappyDogAnimation.json';
import neutral from './animations/NeutralDogAnimation.json';
import sad from './animations/SadDogAnimation.json';
import celebration from './animations/CelebrationAnimation.json';

const stripePromise = loadStripe(
  'pk_test_51RNyRZFL41rQqpjaFBcnEtMMad8rjbADrlZZl4OBb9JMtKfhrZfIXhHbWd6PDv8MRCCGINlKfn98XWmY6GNVq1Fc00pr8pnAKn',
);

export default function WaysToHelpUs() {
  const waysToHelpUsItems = [
    {
      heading: 'Donate Supplies',
      text: 'Shelters often need supplies like food, blankets, toys, and cleaning supplies.',
    },
    {
      heading: 'Volunteer Your Time',
      text: 'Offer to volunteer at the shelter. Tasks may include walking dogs, cleaning, socializing with animals, or helping with administrative work.',
    },
    {
      heading: 'Foster a Pet',
      text: 'Fostering a pet provides a temporary home for animals until they find their forever homes.',
    },
    {
      heading: 'Adopt a Pet',
      text: 'Consider adopting a pet from a shelter instead of buying one from a breeder or pet store.',
    },
    {
      heading: 'Spread Awareness',
      text: 'Share information about adoptable pets on social media, volunteer at adoption events, or organize fundraisers to raise awareness and support for the shelter.',
    },
    {
      heading: 'Monetary Donations',
      text: 'Make monetary donations to the shelter to help cover operating costs, medical expenses, and facility maintenance.',
    },
  ];

  const itemVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const [donationAmount, setDonationAmount] = useState('');
  const [petHappiness, setPetHappiness] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [donated, setDonated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMiniGameOpen, setIsMiniGameOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const modalRef = useRef(null);

  const getPetAnimation = (happiness) => {
    if (happiness < 30) return sad;
    if (happiness < 50) return neutral;
    if (happiness < 70) return happy;
    return veryHappy;
  };

  // Load total donations and happiness from server
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          'http://localhost:3002/api/total-donations',
        );
        const data = await response.json();
        setPetHappiness(data.happinessPercentage);
        setDonated(data.donated);
        // Fetch the full list of donations to get the latest reward
        const rewardsResponse = await fetch('http://localhost:3002/donations');
        const rewardsData = await rewardsResponse.json();
        if (rewardsData && rewardsData.length > 0) {
          // Sort by timestamp or id (descending) and take the latest
          const latestReward = [...rewardsData].sort(
            (a, b) =>
              b.timestamp.localeCompare(a.timestamp) ||
              b.id.localeCompare(a.id),
          )[0];
          setRewards([latestReward]);
        } else {
          setRewards([]);
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };
    fetchDonations();

    const urlParams = new URLSearchParams(window.location.search);
    const isSuccess = urlParams.get('success') === 'true';

    if (isSuccess) {
      const pendingDonation =
        Number(localStorage.getItem('pendingDonation')) || 0;
      console.log('Pending donation amount:', pendingDonation);
      if (pendingDonation > 0) {
        handleDonationSuccess(pendingDonation);
        localStorage.removeItem('pendingDonation');
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
        setIsModalOpen(true);
        setCurrentAnimation(celebration); // Start with celebration
      }
    }
  }, []);

  // Handle Stripe payment
  const handleStripePayment = async () => {
    const amount = Number(donationAmount) || 0;
    console.log('Initiating Stripe payment with amount:', amount);
    if (amount > 0) {
      try {
        localStorage.setItem('pendingDonation', amount.toString()); // Store temporarily
        setDonationAmount(''); // Clear the input immediately
        const stripe = await stripePromise;
        const response = await fetch(
          'http://localhost:3002/api/create-checkout-session',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount * 100 }),
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const session = await response.json();
        console.log('Stripe session created:', session.id);
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (result.error) {
          console.error('Stripe redirect error:', result.error.message);
          localStorage.removeItem('pendingDonation');
        }
      } catch (error) {
        console.error('Error initiating Stripe payment:', error);
        localStorage.removeItem('pendingDonation');
      }
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  const handleDonationSuccess = async (amount) => {
    try {
      console.log('Handling successful donation:', amount);
      await fetch('http://localhost:3002/api/save-donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      // Refresh donations data
      const response = await fetch('http://localhost:3002/api/total-donations');
      const data = await response.json();
      setPetHappiness(data.happinessPercentage);
      setDonated(data.donated);
      const rewardsResponse = await fetch('http://localhost:3002/donations');
      const rewardsData = await rewardsResponse.json();
      if (rewardsData && rewardsData.length > 0) {
        const latestReward = [...rewardsData].sort(
          (a, b) =>
            b.timestamp.localeCompare(a.timestamp) || b.id.localeCompare(a.id),
        )[0];
        setRewards([latestReward]);
      } else {
        setRewards([]);
      }

      // After state updates, schedule the animation switch
      setCurrentAnimation(celebration);
      setTimeout(() => {
        setCurrentAnimation(getPetAnimation(data.happinessPercentage));
        console.log(
          'Switched to pet animation with happiness:',
          data.happinessPercentage,
        );
      }, 3000); // 3 seconds as per your adjustment
    } catch (error) {
      console.error('Error in handleDonationSuccess:', error);
    }
  };

  // Close modal with Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
      setIsMiniGameOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
    } else {
      document.body.style.overflow = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [isModalOpen]);

  // Focus management for accessibility
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  // Handle donation input change
  const handleDonationChange = (e) => {
    const value = e.target.value;
    console.log('Input value:', value);
    if (value === '' || (!isNaN(value) && Number(value) >= 0)) {
      setDonationAmount(value);
    }
  };

  return (
    <WaysToHelpUsContainer>
      <WaysToHelpUsHeading className="h2">Ways to help us</WaysToHelpUsHeading>
      <WaysToHelpUsGridContainer>
        <WaysToHelpUsImage src="images/help_page-removebg.png" />
        {waysToHelpUsItems.map((item) => (
          <motion.div
            key={item.heading}
            initial="initial"
            whileHover="hover"
            variants={itemVariants}
          >
            <WaysToHelpUsItem text={item.text} heading={item.heading} />
          </motion.div>
        ))}
      </WaysToHelpUsGridContainer>
      <WaysToHelpUsCommonInfo>
        <h4 className="h4">
          To adopt a pet from a shelter, you need to know the commitment
          involved in caring for a pet, including the time, effort, and
          resources required. You should have a suitable living environment that
          accommodates the needs of the pet, including space, safety, and any
          necessary amenities. Additionally, you should be ready for the
          responsibilities of pet ownership, such as regular feeding, grooming,
          exercise, and veterinary care.
        </h4>
      </WaysToHelpUsCommonInfo>

      {/* Support Button to Open Modal */}
      <SupportButton onClick={() => setIsModalOpen(true)}>
        Support Us with a Donation
      </SupportButton>

      {/* Modal with Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setIsModalOpen(false);
              setIsMiniGameOpen(false);
            }}
          >
            <ModalContent
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              tabIndex={-1}
            >
              <CloseButton
                onClick={() => {
                  setIsModalOpen(false);
                  setIsMiniGameOpen(false);
                }}
              >
                ×
              </CloseButton>

              {isMiniGameOpen ? (
                <MiniGame onClose={() => setIsMiniGameOpen(false)} />
              ) : (
                <>
                  {/* Donation Section */}
                  <DonationSection>
                    <ModalSectionHeading>
                      Support Us with a Donation
                    </ModalSectionHeading>
                    <DonationInput
                      type="number"
                      value={donationAmount}
                      onChange={handleDonationChange}
                      placeholder="Enter donation amount ($)"
                    />
                    <Button onClick={handleStripePayment}>
                      Pay with Stripe
                    </Button>
                  </DonationSection>

                  <GameSection>
                    <ModalSectionHeading>Our Virtual Pet!</ModalSectionHeading>
                    <Lottie
                      animationData={
                        currentAnimation || getPetAnimation(petHappiness)
                      }
                      style={{
                        width: 170,
                        height: 170,
                        margin: 0,
                        padding: 0,
                        display: 'block',
                      }}
                      loop={currentAnimation === celebration ? false : true}
                      autoplay={true}
                    />
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      Happiness: {Math.round(petHappiness)}%
                    </p>
                    <HappinessBar>
                      <HappinessFill happiness={petHappiness} />
                    </HappinessBar>
                    {petHappiness < 100 && (
                      <GoalReachedText>
                        Need $
                        {Math.ceil((500 - (petHappiness * 500) / 100) / 5) * 5}{' '}
                        more to reach goal!
                      </GoalReachedText>
                    )}
                    {petHappiness === 100 && (
                      <GoalReachedText>Goal reached! 🎉</GoalReachedText>
                    )}
                    <Button onClick={() => setIsMiniGameOpen(true)}>
                      Play Animal Puzzle Game
                    </Button>
                  </GameSection>

                  <RewardSection>
                    <ModalSectionHeading>Last Reward</ModalSectionHeading>
                    {rewards.length > 0 ? (
                      <RewardItem key={rewards[0].id}>
                        Donated ${rewards[0].amount} - Reward: {rewards[0].gift}
                      </RewardItem>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        No rewards yet. Donate to earn some!
                      </p>
                    )}
                  </RewardSection>
                </>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </WaysToHelpUsContainer>
  );
}
