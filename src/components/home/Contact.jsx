import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "@formspree/react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

function Contact() {
    const [state, handleSubmit] = useForm("mrenpevk");

    if (state.succeeded) {
        return (
            <section
                id="contact"
                className="bg-[#0B0B0B] py-28"
            >
                <Container>
                    <SectionHeading
                        eyebrow="Thank You!"
                        title="Estimate Request Sent"
                        description="We've received your request and will get back to you as soon as possible."
                    />
                </Container>
            </section>
        );
    }

    return (
        <section
            id="contact"
            className="bg-[#0B0B0B] py-28"
        >
            <Container>

                <SectionHeading
                    eyebrow="Contact Us"
                    title="Ready To Start Your Project?"
                    description="We'd love to hear from you."
                />

                <div className="grid gap-16 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <div className="space-y-8">

                            <div className="flex items-center gap-5">

                                <div className="rounded-xl bg-orange-500/15 p-4">
                                    <Phone className="text-orange-500" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Phone
                                    </p>

                                    <p className="text-gray-400">
                                        (423) 742-2060
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-5">

                                <div className="rounded-xl bg-orange-500/15 p-4">
                                    <Mail className="text-orange-500" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Email
                                    </p>

                                    <p className="text-gray-400">
                                        allouthardscape@gmail.com
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-5">

                                <div className="rounded-xl bg-orange-500/15 p-4">
                                    <MapPin className="text-orange-500" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Service Area
                                    </p>

                                    <p className="text-gray-400">
                                        Northeast Tennessee
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-5 rounded-3xl bg-[#1F2937] p-8"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-orange-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-orange-500"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-orange-500"
                        />

                        <select
                            name="projectType"
                            defaultValue=""
                            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-orange-500"
                        >
                            <option value="" disabled>
                                Select Project Type
                            </option>

                            <option>Retaining Wall</option>
                            <option>Patio</option>
                            <option>Driveway</option>
                            <option>Excavation</option>
                            <option>Grading</option>
                            <option>Drainage</option>
                            <option>Outdoor Living Space</option>
                            <option>Other</option>
                        </select>

                        <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder="Tell us about your project..."
                            className="w-full rounded-xl border border-white/10 bg-[#111827] p-4 outline-none focus:border-orange-500"
                        />

                        <Button
                            type="submit"
                            disabled={state.submitting}
                        >
                            {state.submitting
                                ? "Sending..."
                                : "Request Free Estimate"}
                        </Button>

                    </motion.form>

                </div>

            </Container>
        </section>
    );
}

export default Contact;