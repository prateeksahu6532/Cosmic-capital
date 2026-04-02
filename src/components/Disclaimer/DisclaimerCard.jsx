import React from "react";
import {
  FiShield,
  FiLock,
  FiUser,
  FiServer,
  FiAlertCircle,
  FiMail,
  FiPhone,
} from "react-icons/fi";

function DisclaimerCard() {
  const disclaimerCards = [
    {
      id: 1,
      icon: FiShield,
      title: "Legal Compliance",
      description:
        "Our services comply with all applicable laws and regulations. We maintain strict adherence to industry standards.",
    },
    {
      id: 2,
      icon: FiLock,
      title: "Data Privacy",
      description:
        "Your personal data is protected with advanced encryption. We never share your information with third parties without consent.",
    },
    {
      id: 3,
      icon: FiUser,
      title: "User Rights",
      description:
        "You have the right to access, modify, or delete your data. Contact us anytime to exercise your privacy rights.",
    },
    {
      id: 4,
      icon: FiServer,
      title: "Service Availability",
      description:
        "We aim for 99.9% uptime. Scheduled maintenance may occasionally affect service availability.",
    },
    {
      id: 5,
      icon: FiAlertCircle,
      title: "Liability Disclaimer",
      description:
        "Services are provided 'as is'. We are not liable for indirect damages or losses from service interruptions.",
    },
    {
      id: 6,
      icon: FiMail,
      title: "Contact & Support",
      description:
        "Reach out to our support team for any questions or concerns regarding this disclaimer.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disclaimerCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white"
            >
              {/* Icon & Title Section */}
              <div className="bg-gradient-to-r from-orange-200 to-orange-100 p-3 flex items-center gap-3">
                <IconComponent
                  className="text-orange-700 flex-shrink-0"
                  size={28}
                />
                <h3 className="text-lg font-semibold text-orange-700">
                  {card.title}
                </h3>
              </div>

              {/* Description Section */}
              <div className="p-4">
                <p className="text-gray-800 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Questions Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 mt-12">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-lg font-semibold">
            If you have any questions about these disclaimers and terms, please
            contact us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <FiMail className="text-orange-200" size={20} />
              <span className="text-orange-100 font-semibold">
                support@kutchreact.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-orange-200" size={20} />
              <span className="text-orange-100 font-semibold">
                +1 (123) 456-7890
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DisclaimerCard;
