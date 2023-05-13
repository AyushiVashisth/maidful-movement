import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import img1 from "../Images/062519_tMHFA_StressTips_Infographic_v2.png";
import img2 from "../Images/istockphoto-1283496379-170667a.jpg";
import img3 from "../Images/Featured_Blog_Post_images_Nov_2021-Dec_2021-1_1024x1024.webp";
import img4 from "../Images/Healthy-Meals-to-Lose-Weight.jpg";
import img5 from "../Images/whm-infographic-diets-a2-1605645624.png";
import img6 from "../Images/Keto-eat-avoid.png";
import img7 from "../Images/Keto-vs-atkins-vs-paleo.jpg.webp";
import img8 from "../Images/Mental+Health+Awareness+week.png";
import img9 from "../Images/062519_tMHFA_StressTips_Infographic_v2.png";
import img10 from "../Images/Healthy-Meals-to-Lose-Weight.jpg";
import img11 from "../Images/What is Keto Diet_.png";
import img12 from "../Images/Healthy-Meals-to-Lose-Weight.jpg";
import img13 from "../Images/istockphoto-1283496379-170667a.jpg";
import img14 from "../Images/whm-infographic-diets-a2-1605645624.png";

import AutomaticCarousel from "./Slider";
type Card = {
  title: string;
  imageUrl: string;
};

const AutoSliderCards: Card[] = [
  {
    title: "Card 1",
    imageUrl: img1,
  },
  {
    title: "Card 2",
    imageUrl: img2,
  },
  {
    title: "Card 3",
    imageUrl: img3,
  },
  {
    title: "Card 1",
    imageUrl: img4,
  },
  {
    title: "Card 2",
    imageUrl: img5,
  },
  {
    title: "Card 3",
    imageUrl: img6,
  },
  {
    title: "Card 1",
    imageUrl: img7,
  },
  {
    title: "Card 2",
    imageUrl: img8,
  },
  {
    title: "Card 3",
    imageUrl: img9,
  },
  {
    title: "Card 3",
    imageUrl: img10,
  },
  {
    title: "Card 1",
    imageUrl: img11,
  },
  {
    title: "Card 2",
    imageUrl: img12,
  },
  {
    title: "Card 3",
    imageUrl: img13,
  },
  {
    title: "Card 3",
    imageUrl: img14,
  },
];

const LandingPage: React.FC = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div>
        <AutomaticCarousel cards={AutoSliderCards} />
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-300px justify-center items-center mb-4">
            <img
              src="https://www.1mg.com/articles/wp-content/uploads/2022/03/weight-loss-hacks.jpg"
              alt="Article Header"
              className="mx-auto"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="container mx-auto px-4 py-8 text-left">
                <h1
                  className="text-3xl font-bold hover:underline uppercase"
                  onClick={() => setOpen1(true)}
                >
                  5 Weight Loss Tips That Can Work for You
                </h1>

                <p className="mt-4">
                  If you are planning to lose weight, then working out and
                  carefully monitoring your diet every day might not be the only
                  way to cut down the fat. Although weight loss is a challenging
                  task that needs a dedicated approach, sticking to your goal
                  till you achieve it is the key. And to help you get close to
                  your target and help you to hasten your weight loss.
                </p>
                <Transition.Root show={open1} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen1}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6">
                            <h5 className="text-3xl font-bold  uppercase">
                              A few tips to get started
                            </h5>
                            <p className="mt-4">1. Follow portion control</p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                As losing weight is all about keeping a tab on
                                your calorie intake, ensuring portion control
                                can go a long way not only to eat healthy but
                                also to manage your weight.
                              </p>
                              <p>
                                To prevent eating in excess, you can switch to
                                smaller plates, spoons, and bowls which not only
                                cause you to eat less but also reduce your
                                overall intake of food. The same rule applies if
                                you are eating out or ordering out.
                              </p>
                            </div>
                            <p className="mt-4">2. Practice mindful eating</p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                Our busy schedule calls for a quick meal and
                                instant snacks which can impact our weight loss
                                and overall health. This is why it is important
                                to not only eat a healthy diet but also savor
                                each bite and enjoy the food you eat. Chew your
                                food slowly and avoid distractions like TV or
                                phones when eating. This is because, when you
                                are stressed or distracted you tend to eat a lot
                                which can affect your weight loss plan.{" "}
                              </p>
                            </div>
                            <p className="mt-4">3. Maintain a diet journal </p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                When losing weight, it is mandatory to keep a
                                close tab on things that favor your weight loss
                                goals and those that hinder your plan. For
                                example, there are times when you strictly
                                follow your diet throughout the day but eat a
                                processed snack to satiate your cravings. These
                                small things are often neglected which in turn
                                can hinder your weight loss. So jotting down
                                your daily routine such as your calorie intake,
                                the quantity of food eaten, types of foods
                                eaten, cheat meals (if any), water intake, etc.
                                By doing so, it will be easy to work on your
                                problem areas & achieve your weight loss goal.
                              </p>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen1(false)}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-300px justify-center items-center mb-4">
            <img
              src="https://www.1mg.com/articles/wp-content/uploads/2020/10/keto-diet-for-weight-loss.jpg"
              alt="Article Header"
              className="mx-auto"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="container mx-auto px-4 py-8 text-left">
                <h1
                  className="text-3xl font-bold hover:underline uppercase"
                  onClick={() => setOpen2(true)}
                >
                  Keto Diet For Weight Loss: All You Need To Know!
                </h1>
                <p className="mt-4">
                  The Ketogenic Diet, also known as keto diet, has been
                  snatching the limelight of the world ever since the “quick
                  weight loss” industry started gaining momentum. Keto diet was
                  initially invented to treat health conditions like epilepsy
                  and seizures. Now, since celebrities started endorsing the
                  keto diet for weight loss and management, it is now being
                  widely used for weight loss and for the management of diseases
                  like Type 2 Diabetes.
                </p>
                <Transition.Root show={open2} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen2}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6">
                            <p className="mt-4 font-bold">
                              How does keto diet affect your body?
                            </p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                Keto Diet is a low-carb eating plan that is
                                composed of 75% of fat and the remaining 20-35%
                                includes both carbohydrates and protein.
                              </p>
                            </div>
                            <div className="bg-gray-200 p-6">
                              <p>
                                Due to the drastic decrease in the consumption
                                of carbohydrates and a comparative increase in
                                the consumption of fats, the body moves into a
                                metabolic process known as Ketosis. Ketosis is a
                                process where the body goes into a state of
                                starvation and starts breaking down stored fats
                                instead of carbohydrates and produces ketone
                                bodies. Ketone bodies are lipid molecules
                                produced by the liver. The primary function of
                                the ketones is to break the excess body fat,
                                sparing of lean muscle and improving insulin
                                sensitivity
                              </p>
                            </div>
                            <h5 className="mt-4 font-bold">
                              Types of Keto Diet
                            </h5>
                            <p className="mt-4">1. Standard Ketogenic Diet</p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                An eating plan which is made of 75% fat, 20%
                                protein and only 5% carbohydrates.
                              </p>
                            </div>
                            <p className="mt-4">
                              2. Very Low Carb Ketogenic Diet:
                            </p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                A diet with no more than 50g of carbohydrates
                                per day.
                              </p>
                            </div>
                            <p className="mt-4">3.MCT Ketogenic Diet: </p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                Also known as Medium Chain Triglyceride Diet, it
                                is not based on the division of diet ratios.
                                Instead, it uses MCT oil in food, namely,
                                coconut oil for the production of ketone bodies.
                              </p>
                            </div>
                            <p className="mt-4">4.Cyclical Ketogenic Diet: </p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                It is a rotation between high-carb diet day to
                                low-carb diet day in order to bring the body out
                                of ketosis.
                              </p>
                            </div>
                            <p className="mt-4">5.Targeted Ketogenic Diet:</p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                In this, adding of carbohydrates is allowed
                                around the workout hours.
                              </p>
                            </div>
                            <p className="mt-4 font-bold">Is keto diet safe?</p>
                            <div className="bg-gray-200 p-6">
                              <p>
                                Using keto diet for weight loss can be safe only
                                if you follow it under expert supervision. Keto
                                diet requires to be handled with close
                                supervision and care because you may need timely
                                check-ups of your blood parameters since it
                                involves high fat, minimal protein and very low
                                carb intake.
                              </p>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen2(false)}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="max-w-2xl justify-center items-center mb-4 mx-auto">
            <img
              src="https://images.theconversation.com/files/475914/original/file-20220725-15-unq819.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
              alt="blog"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="container mx-auto px-4 py-8 text-left">
                <h1
                  className="text-3xl font-bold hover:underline uppercase"
                  onClick={() => setOpen3(true)}
                >
                  5 Simple Ways to Improve Your Mental Health
                </h1>
                <p className="mt-4">
                  Taking care of your mental health is just as important as
                  taking care of your physical health
                </p>
                <Transition.Root show={open3} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen1}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-6">
                            <h5 className="text-3xl font-bold  uppercase">
                              Here are 5 simple ways you can improve your mental
                              health:
                            </h5>
                            <div className="bg-gray-200 p-6 ">
                              <p>
                                1. Practice Mindfulness: Mindfulness is the
                                practice of being present in the moment and
                                focusing on your thoughts and feelings without
                                judgment. It can help reduce stress and anxiety
                                and improve overall mental health.
                              </p>
                            </div>
                            <div className="bg-gray-200 p-6 t-2">
                              <p>
                                2. Exercise Regularly: Exercise is not only good
                                for your physical health but also your mental
                                health. It can help reduce stress and anxiety
                                and improve mood and self-esteem.
                              </p>
                            </div>
                            <div className="bg-gray-200 p-6">
                              <p>
                                3. Get Enough Sleep: Getting enough sleep is
                                essential for good mental health. Lack of sleep
                                can lead to increased stress and anxiety, and
                                can also affect mood and cognitive function.
                              </p>
                            </div>
                            <div className="bg-gray-200 p-6">
                              <p>
                                4. Connect with Others: Social connection is
                                important for mental health. Make time to
                                connect with friends and family, or join a
                                community group or club to meet new people.
                              </p>
                            </div>
                            <div className="bg-gray-200 p-6">
                              <p>
                                5. Practice Self-Care: Taking care of yourself
                                is essential for good mental health. This can
                                include activities like taking a relaxing bath,
                                reading a book, or going for a walk.
                              </p>
                            </div>
                            <div className="p-6">
                              <p>
                                By incorporating these simple practices into
                                your daily routine, you can help improve your
                                mental health and overall well-being.
                              </p>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen3(false)}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
