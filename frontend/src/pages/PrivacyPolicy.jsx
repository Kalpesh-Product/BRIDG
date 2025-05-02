import React from "react";
import { Link } from "react-router-dom";
import { ReactFitty } from "react-fitty";
import useIsMobile from "../hooks/useIsMobile";

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-mega text-center">Privacy Policy</h1>

      <div className="flex flex-col gap-4">
        {!isMobile ? (
          <h4 className="text-title font-bold text-gray-700">
            Last Updated: 2nd October 2024
          </h4>
        ) : (
          <ReactFitty>Last Updated: 2nd October 2024</ReactFitty>
        )}
        <p className="text-body">
          Welcome to BRIDG PRIVATE LIMITED (DUBAI COMPANY) ("Company", "we",
          "our", or "us") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and protect your
          personal information when you use our SaaS platform (the "Service"),
          located at{" "}
          <Link className="underline" to={"/"}>
            www.thebridg.com
          </Link>
          , as well as your rights in relation to your personal data.
          <br />
          <br />
          By accessing or using the Service, you agree to the terms of this
          Privacy Policy. If you do not agree with our practices, please do not
          use the Service.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          1. Information We Collect
        </h4>
        <p className="text-body">
          We collect the following types of information when you use our
          platform:
        </p>

        <p className="italic text-blue-400 text-body">
          1.1 Personal Information
        </p>
        <p className="text-body">
          This refers to any information that identifies you personally,
          including but not limited to:
        </p>
        <div className="ml-6">
          <ul className="text-body">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Billing and payment details</li>
            <li>Job title</li>
          </ul>
        </div>

        <p className="italic text-blue-400 text-body">1.2 Usage Data</p>
        <p className="text-body">
          We may automatically collect information about how you use our
          Service, including:
        </p>
        <div className="ml-6">
          <ul className="text-body">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages viewed and actions taken on our platform</li>
            <li>Time and date of usage</li>
            <li>Referring website addresses (URLs)</li>
          </ul>
        </div>

        <p className="italic text-blue-400 text-body">
          1.3 Cookies and Tracking Technologies
        </p>
        <p className="text-body">
          We use cookies, web beacons, and similar technologies to enhance user
          experience, analyze site traffic, and improve our Service. You can
          control the use of cookies at the individual browser level. If you
          reject cookies, some features of the Service may not function
          properly.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          2. How We Use Your Information
        </h4>
        <p className="text-body">
          We use the information we collect for the following purposes:
        </p>
        <div className="ml-6">
          <ul className="text-body">
            <li>
              <b>To Provide the Service:</b> We use your personal information to
              manage your account, process payments, and provide access to the
              platform.
            </li>
            <li>
              <b>To Improve the Service:</b> We analyze usage data to enhance
              the functionality, performance, and security of the platform.
            </li>
            <li>
              <b>To Communicate with You:</b> We may send you important updates,
              notifications, or promotional materials related to our Service.
              You can opt out of marketing communications at any time.
            </li>
            <li>
              <b>To Comply with Legal Obligations:</b> We may use your
              information to comply with legal obligations, resolve disputes, or
              enforce our agreements.
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          3. How We Share Your Information
        </h4>
        <p className="text-body">
          We do not sell, rent, or trade your personal information to third
          parties. However, we may share your information in the following
          circumstances:
        </p>

        <p className="italic text-blue-400 text-body">
          3.1 Service Providers
        </p>
        <p className="text-body">
          We may share your information with trusted third-party service
          providers that assist us in delivering the Service, such as payment
          processors, hosting providers, customer support platforms, and
          analytics services.
        </p>

        <p className="italic text-blue-400 text-body">
          3.2 Legal Obligations
        </p>
        <p className="text-body">
          We may disclose your information if required by law, court order, or
          other legal processes, or if we believe it is necessary to protect our
          rights, property, or the safety of our users or others.
        </p>

        <p className="italic text-blue-400 text-body">
          3.3 Business Transfers
        </p>
        <p className="text-body">
          In the event of a merger, acquisition, sale of assets, or bankruptcy,
          your personal information may be transferred to a new entity.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          4. Data Security
        </h4>
        <p className="text-body">
          We implement industry-standard security measures to protect your
          information from unauthorized access, loss, misuse, or alteration.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          5. Data Retention
        </h4>
        <p className="text-body">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          6. Your Data Protection Rights
        </h4>
        <p className="text-body">
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <div className="ml-6">
          <ul className="text-body">
            <li>
              <b>Right to Access:</b> You have the right to request access to
              your information.
            </li>
            <li>
              <b>Right to Rectification:</b> You can request corrections to
              inaccurate information.
            </li>
            <li>
              <b>Right to Erasure:</b> You can request that we delete your
              information.
            </li>
            <li>
              <b>Right to Restrict Processing:</b> You can limit the processing
              of your information.
            </li>
            <li>
              <b>Right to Data Portability:</b> You can request a copy of your
              data in machine-readable form.
            </li>
            <li>
              <b>Right to Object:</b> You can object to processing based on
              legitimate interests, including marketing.
            </li>
          </ul>
        </div>

        <p className="text-body">
          To exercise any of these rights, contact us at
          <Link
            className="WONOBLUE text-decoration-none"
            to="mailto:response@thebridg.com"
          >
            response@thebridg.com
          </Link>
          .
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          7. International Data Transfers
        </h4>
        <p className="text-body">
          We may transfer your personal information to countries outside of your
          jurisdiction.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          8. Children's Privacy
        </h4>
        <p className="text-body">
          Our Service is not intended for individuals under the age of 18.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          9. Changes to This Privacy Policy
        </h4>
        <p className="text-body">
          We may update this Privacy Policy from time to time. Your continued
          use of the Service constitutes acceptance of the revised policy.
        </p>
      </div>

      <hr className="border-t-[2px]" />
      <div className="flex flex-col gap-4">
        <h4 className="text-title font-bold text-gray-700">
          10. Contact Information
        </h4>
        <p className="text-body">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <br/>
        <div>
          <span className="text-body">BRIDG PRIVATE LIMITED</span>
          <br />
          <span className="text-body">Axis 2, Dubai Silicon Oasis, Dubai, UAE</span>
          <div className="d-flex flex-column fw-regular mt-1">
            <Link className="underline" to="mailto:response@thebridg.com">
              response@thebridg.com
            </Link>
            <br />
            <Link className="underline" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
