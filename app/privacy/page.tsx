'use client';

import { motion } from "framer-motion";
import {
    Shield,
    Mail,
    Database,
    LineChart,
    Lock,
    Cookie,
    Baby,
    Scale,
    Info
} from "lucide-react";

export default function PrivacyPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5
            }
        },
        initial: {
            rotate: 0
        }
    };

    const sections = [
        {
            title: "Information We Collect",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <Database className="w-6 h-6 text-emerald-500" />
                </motion.div>
            ),
            content: "When you visit our website, we may collect certain information about you, including your IP address, browser type and version, operating system, and other technical information. We may also collect information about your use of our website, such as the pages you visit, the links you click, and the duration of your visit.",
            className: "bg-emerald-500/5 border-emerald-500/10"
        },
        {
            title: "Use of Information",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <LineChart className="w-6 h-6 text-blue-500" />
                </motion.div>
            ),
            content: "We use the information we collect to improve our website and provide a better user experience to our visitors. We may also use the information for the following purposes:\n\n" +
                "• To analyze traffic and usage patterns on our website\n" +
                "• To diagnose and fix technical issues\n" +
                "• To prevent fraud and protect our website from security threats\n" +
                "• To comply with legal obligations and respond to lawful requests from authorities\n\n" +
                "We use Google AdSense to display ads on our website. Google AdSense may use cookies and other tracking technologies to collect information about your use of our website and other websites.",
            className: "bg-blue-500/5 border-blue-500/10"
        },
        {
            title: "Security",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <Lock className="w-6 h-6 text-purple-500" />
                </motion.div>
            ),
            content: "We take reasonable measures to protect the personal information we collect from unauthorized access, use, and disclosure. However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.",
            className: "bg-purple-500/5 border-purple-500/10"
        },
        {
            title: "Cookies and Tracking Technologies",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <Cookie className="w-6 h-6 text-amber-500" />
                </motion.div>
            ),
            content: "We may use cookies and other tracking technologies to collect information about your use of our website. This information may be used to personalize your experience, analyze traffic and usage patterns, and serve targeted advertising. You can choose to disable cookies or other tracking technologies in your browser settings. However, this may limit your ability to use certain features of our website.",
            className: "bg-amber-500/5 border-amber-500/10"
        },
        {
            title: "Children's Privacy",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <Baby className="w-6 h-6 text-pink-500" />
                </motion.div>
            ),
            content: "Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under the age of 13.",
            className: "bg-pink-500/5 border-pink-500/10"
        },
        {
            title: "GDPR",
            icon: (
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                >
                    <Scale className="w-6 h-6 text-teal-500" />
                </motion.div>
            ),
            content: "If you are located in the European Union, you have certain rights under the General Data Protection Regulation (GDPR). These rights include the right to access, rectify, and erase your personal information, as well as the right to restrict or object to certain types of processing.",
            className: "bg-teal-500/5 border-teal-500/10"
        }
    ];

    const formatDate = (date: Date) => {
        // Ensure consistent date format between server and client
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(date);
    };

    return (
        <main className="container mx-auto py-12 px-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        className="w-16 h-16 mx-auto mb-4"
                    >
                        <Shield className="w-full h-full text-blue-500" />
                    </motion.div>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground">
                        At notnicto.com, we take your privacy seriously
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            variants={itemVariants}
                            className={`backdrop-blur-sm border p-6 rounded-xl ${section.className}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {section.icon}
                                <h2 className="text-xl font-semibold">{section.title}</h2>
                            </div>
                            <div className="text-muted-foreground whitespace-pre-line">
                                {section.content}
                            </div>
                        </motion.section>
                    ))}

                    {/* Contact Section */}
                    <motion.section
                        variants={itemVariants}
                        className="backdrop-blur-sm bg-blue-500/5 border border-blue-500/10 p-6 rounded-xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                variants={iconVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                <Mail className="w-6 h-6 text-blue-500" />
                            </motion.div>
                            <h2 className="text-xl font-semibold">Contact Us</h2>
                        </div>
                        <p className="text-muted-foreground">
                            If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                            <a href="mailto:mail@notnicto.com" className="text-blue-500 hover:underline">
                                mail@notnicto.com
                            </a>
                        </p>
                    </motion.section>

                    {/* Footer */}
                    <motion.div
                        variants={itemVariants}
                        className="text-sm text-muted-foreground text-center border-t border-border pt-8"
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <motion.div
                                variants={iconVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                <Info className="w-4 h-4 text-muted-foreground" />
                            </motion.div>
                            <p>Last updated: {formatDate(new Date())}</p>
                        </div>
                        <p>
                            This privacy policy is subject to change without notice. Please check regularly for updates.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}
