import React from "react";
// import banner from "../../assets/AboutUS/mainbanner.png";
// import abohalal from "../../assets/AboutUS/aboHalal.png";

import { Accordion } from "flowbite-react";

const AboutUs = () => {
  return (
    <>
      <div className="my-14 md:flex items-center justify-center bg-[#F6F6F5] ">
        <div className="md:w-[60%] mx-2 md:mx-0 ">
          {/* <img src={banner} alt=" missing" className="rounded" /> */}
          <p className="mt-5 md:mt-6  text-2xl  md:text-4xl font-bold">
            About Us
          </p>
          <div className="md:p-10 p-2">
            <p className="text-gray-500 text-md">
              A vendor shop is a retail space or online platform where various
              sellers offer their products or services to customers. These shops
              can be physical stores in a marketplace or digital storefronts on
              e-commerce websites. Vendor shops often feature a diverse range of
              products from different suppliers, allowing customers to browse
              and compare options conveniently. Vendors may offer handmade
              crafts, electronics, clothing, food items, or a variety of other
              goods The shop owner or platform typically oversees the
              operations, ensuring product quality, customer support, and a
              seamless shopping experience. Customers benefit from the
              convenience of one-stop shopping and a wide selection of offerings
            </p>
          </div>
          <div className="mt-10">
            <p className="text-gray-500 text-md">
              A policy is a set of guidelines and rules established by an
              organization, government, or entity to govern actions and
              decision-making. Policies provide a framework for consistency,
              compliance, and behavior within an organization, helping to
              achieve specific objectives, maintain order, and ensure legal and
              ethical standards are upheld.
            </p>
            <p className="mt-10 text-md">
              Should you have any clarifications regarding this Privacy Policy,
              please do not hesitate to contact us at{" "}
              <span className="text-[#E7AB9E]">+91 9035278780</span>
            </p>
          </div>
          {/* <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="w-full ">
              <img src={abohalal} alt="" className="rounded" />
            </div>
            <div className="w-full ">
              <img src={abohalal} alt="" className="rounded" />
            </div>
          </div> */}
          <div className="mt-10 text-gray-500 text-md px-5">
            <p>
              To protect against the loss, misuse and alteration of the
              information under its control, the Company has in place
              appropriate physical, electronic and managerial procedures. For
              example, the Company servers are accessible only to authorized
              personnel and your information is shared with employees and
              authorized personnel on a need to know basis to complete the
              transaction and to provide the services requested by you. Although
              the Company endeavour to safeguard the confidentiality of your
              personally identifiable information, transmissions made by means
              of the Internet cannot be made absolutely secure. By using the
              website, you agree that the Company will have no liability for
              disclosure of your information due to errors in transmission
              and/or unauthorized acts of third parties.
            </p>
          </div>
          <div className="mt-10">
            <p className=" py-5 text-center text-4xl font-bold">
              Legal Documents{" "}
            </p>
            <div className="terms$services">
              <p className="mt-5 text-3xl font-bold">Terms of Service</p>
              <p className="mt-5 text-lg font-bold text-gray-600">
                1. Acceptance of Terms
              </p>
              <p className="mt-4 text-md text-gray-500">
                Welcome to OnlineBK Market Basavakalyan ("Company", "we", "our",
                "us"). These Terms of Service ("Terms", "Terms of Service")
                govern your use of our website located at [Insert Your Website
                URL] (together or individually "Service") operated by OnlineBK
                Market Basavakalyan.
              </p>
              <p className="mt-5 text-lg font-bold text-gray-600">
                2. Communications
              </p>
              <p className="mt-4 text-md text-gray-500">
                By using our Service, you agree to subscribe to newsletters,
                marketing or promotional materials and other information we may
                send. However, you may opt out of receiving any, or all, of
                these communications from us by following the unsubscribe link
                or by emailing at [Insert Your Contact Email].
              </p>
            </div>
            <div className="Privacy&Policy">
              <p className="mt-5 text-3xl font-bold">Privacy Policy</p>
              <p className="mt-5 text-lg font-bold text-gray-600">
                1. Introduction
              </p>
              <p className="mt-4 text-md text-gray-500">
                Welcome to the OnlineBK Market Basavakalyan Privacy Policy. We are
                located at Basavakalyan karnataka 585327
              </p>
              <p className="mt-5 text-lg font-bold text-gray-600">
                2. Information We Collect
              </p>
              <p className="mt-4 text-md text-gray-500">
                Information we collect includes both information you knowingly
                and actively provide us when using or participating in any of
                our services and promotions, and any information automatically
                sent by your devices in the course of accessing our products and
                services.
              </p>
            </div>
            <div className="terms$services">
              <p className="mt-5 text-3xl font-bold">Contact Us</p>

              <p className="mt-4 text-md text-gray-500">
                For any questions or concerns regarding our Terms of Service or
                Privacy Policy, you may contact us using the following details:
              </p>

              <p className="mt-4 text-md text-gray-500">
                OnlineBK Market Basavakalyan
              </p>
              <p className=" text-md text-gray-500">
                OnlineBK@gmail.com
              </p>
              <p className=" text-md text-gray-500">
                Basavakalyan dist Bidar karnataka 585327
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 md:mx-10 my-10">
        <p className="text-3xl font-bold mb-4">FAQ</p>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              What is your return policy?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                If you're not satisfied with your purchase, we accept returns
                within 3 days of delivery for only non food items and there is  no return policy for food items. To initiate a return, please email
                us at OnlineBK@gmail.com with your order number and a
                brief explanation of why you're returning the item.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              How do I track my order?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can track your order by clicking the tracking link in your
                shipping confirmation email, or by logging into your account on
                our website and viewing the order details.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              How do I contact customer support?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can contact our customer support team by emailing us at
                OnlineBK@gmail.com, or by calling us at 9035278780 | 6363538523
                between the hours of 9am to 10pm , throughout the week.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Can I change or cancel my order?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Unfortunately, once an order has been placed for food items, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, but for non food item you can cancel the item or you can return them for a refund within 24 hours
                 of delivery.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Do you offer international shipping?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Currently, we only offer shipping within the Basavakalyan dist Bidar karnataka 585327.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              What payment methods do you accept?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400  ">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default AboutUs;
