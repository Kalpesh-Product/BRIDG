import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className='text-hero text-center'>Privacy Policy</h1>
      
      <div className="flex flex-col gap-4">
          <h4 className='text-title font-bold text-gray-700'>Last Updated: 2nd October 2024</h4>
          <p>
            Welcome to BRIDG PRIVATE LIMITED (DUBAI COMPANY) ("Company",
            "we", "our", or "us") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and protect
            your personal information when you use our SaaS platform (the
            "Service"), located at{" "}
            
              <Link className="underline" to={"/"}>
                www.thebridg.com
              </Link>
            
            , as well as your rights in relation to your personal data.
            <br />
            <br />
            By accessing or using the Service, you agree to the terms of this
            Privacy Policy. If you do not agree with our practices, please do
            not use the Service.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">1. Information We Collect</h4>
          <p>
            We collect the following types of information when you use our
            platform:
          </p>

          <p className="italic text-blue-400 text-body">1.1 Personal Information</p>
          <p>
            This refers to any information that identifies you personally,
            including but not limited to:
          </p>
          <div className="ml-6">
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Billing and payment details</li>
              <li>Job title</li>
            </ul>
          </div>

          <p className="italic text-blue-400 text-body">1.2 Usage Data</p>
          <p>
            We may automatically collect information about how you use our
            Service, including:
          </p>
          <div className="ml-6">
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages viewed and actions taken on our platform</li>
              <li>Time and date of usage</li>
              <li>Referring website addresses (URLs)</li>
            </ul>
          </div>

          <p className="italic text-blue-400 text-body">1.3 Cookies and Tracking Technologies</p>

          <p>
            We use cookies, web beacons, and similar technologies to enhance
            user experience, analyze site traffic, and improve our Service. You
            can control the use of cookies at the individual browser level. If
            you reject cookies, some features of the Service may not function
            properly.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">2. How We Use Your Information</h4>
          <p>We use the information we collect for the following purposes:</p>
          <div className="ml-6 yMargin">
            <ul>
              <li>
                <b className="fw-bold">To Provide the Service:</b> We use
                your personal information to manage your account, process
                payments, and provide access to the platform.
              </li>
              <li>
                <b className="fw-bold">To Improve the Service:</b> We
                analyze usage data to enhance the functionality, performance,
                and security of the platform.
              </li>
              <li>
                <b className="fw-bold">To Communicate with You:</b> We may
                send you important updates, notifications, or promotional
                materials rimport from 'react-router-dom'; elated to our
                Service.import from 'react-router-dom'; You can opt out of
                marketing communications at any time.
              </li>
              <li>
                <b className="fw-bold">
                  To Comply with Legal Obligations:
                </b>{" "}
                We may use your information to comply with legal obligations,
                resolve disputes, or enforce our agreements.
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">3. How We Share Your Information</h4>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. However, we may share your information in the following
            circumstances:
          </p>
          <p className="italic text-blue-400 text-body">3.1 Service Providers</p>

          <p>
            We may share your information with trusted third-party service
            providers that assist us in delivering the Service, such as payment
            processors, hosting providers, customer support platforms, and
            analytics services. These providers are bound by confidentiality
            obligations and may not use your information for any other purposes.
          </p>

          <p className="italic text-blue-400 text-body">3.2 Legal Obligations</p>
          <p>
            We may disclose your information if required by law, court order, or
            other legal processes, or if we believe it is necessary to protect
            our rights, property, or the safety of our users or others.
          </p>

          <p className="italic text-blue-400 text-body">3.3 Business Transfers</p>
          <p>
            In the event of a merger, acquisition, sale of assets, or
            bankruptcy, your personal information may be transferred to a new
            entity. You will be notified if such a transfer occurs and informed
            of any changes in this Privacy Policy.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">4. Data Security</h4>

          <p>
            We implement industry-standard security measures to protect your
            information from unauthorized access, loss, misuse, or alteration.
            These include encryption, firewalls, secure socket layer (SSL)
            technology, and access controls. While we strive to protect your
            personal information, no method of transmission over the internet or
            electronic storage is 100% secure. Therefore, we cannot guarantee
            absolute security.
          </p>
        </div>
        <hr className="border-t-[2px]" />

        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">5. Data Retention</h4>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. Once your
            data is no longer needed, we will delete or anonymize it.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">6. Your Data Protection Rights</h4>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <div className="ml-6">
            <ul>
              <li>
                <b className="fw-bold">Right to Access:</b> You have the
                right to request access to the personal information we hold
                about you.
              </li>
              <li>
                <b className="fw-bold">Right to Rectification:</b> You can
                request corrections to any inaccurate or incomplete personal
                information.
              </li>
              <li>
                <b className="fw-bold">Right to Erasure:</b> You can
                request that we delete your personal information under certain
                circumstances.
              </li>
              <li>
                <b className="fw-bold">Right to Restrict Processing:</b>{" "}
                You may request that we limit the processing of your personal
                information.
              </li>
              <li>
                <b className="fw-bold">Right to Data Portability:</b> You
                can request a copy of your personal information in a structured,
                commonly used, and machine-readable format.
              </li>
              <li>
                <b className="fw-bold">Right to Object:</b> You have the
                right to object to our processing of your personal information
                based on legitimate interests, including marketing activities.
              </li>
            </ul>
          </div>

          <p>
            To exercise any of these rights, please contact us at{" "}
            <Link
              className="WONOBLUE text-decoration-none"
              to={"mailto:response@thebridg.com"}
            >
              response@thebridg.com
            </Link>
            . We may request specific information to verify your identity before
            fulfilling your request.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">7. International Data Transfers</h4>
          <p>
            We may transfer your personal information to countries outside of
            your jurisdiction, including to servers and service providers
            located in other countries. When we do so, we take appropriate steps
            to ensure that your data is handled securely and in accordance with
            this Privacy Policy and applicable data protection laws.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">8. Children's Privacy</h4>
          <p>
            Our Service is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe we have collected personal data from a child, please contact
            us at{" "}
            <Link
              className="WONOBLUE text-decoration-none"
              to={"mailto:response@thebridg.com"}
            >
              response@thebridg.com
            </Link>
            , and we will take appropriate steps to delete that information.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">9. Changes to This Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or Service offerings.
            We will notify you of any significant changes by posting the updated
            Privacy Policy on our platform or by sending you an email
            notification. Your continued use of the Service after the changes
            are made will constitute acceptance of the revised policy.
          </p>
        </div>
        <hr className="border-t-[2px]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-title font-bold text-gray-700">10. Contact Information</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal information, please contact us at:
          </p>
          <div className="">
                      <span>BRIDG PRIVATE LIMITED</span>
                      <br />
                      <span>Axis 2, Dubai Silicon Oasis, Dubai, UAE</span>
                       <div className="d-flex flex-column fw-regular mt-1">
                        <Link
                          className="underline"
                          to={"mailto:response@thebridg.com"}>
                          response@thebridg.com
                        </Link>
                        <br />
                        <Link className="underline" to={"/contact"}>
                          Contact us
                        </Link>
                      </div>
                    </div>
           
        </div>
     </div>
  )
}

export default PrivacyPolicy
