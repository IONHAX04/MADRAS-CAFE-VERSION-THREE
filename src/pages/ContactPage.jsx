import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Calendar, Users, Check } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [contact, setContact] = useState({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });
  const [reservation, setReservation] = useState({ name: "", date: "", time: "19:30", guests: "2", location: "Chennai — Mylapore", phone: "" });
  const [contactSent, setContactSent] = useState(false);
  const [resSent, setResSent] = useState(false);

  const onContact = (e) => {
    e.preventDefault();
    if (!contact.name || !/^\S+@\S+\.\S+$/.test(contact.email) || !contact.message) {
      toast({ title: "Hold on", description: "Please fill name, a valid email and a message." });
      return;
    }
    setContactSent(true);
    toast({ title: "Message sent!", description: "We’ll get back to you within 24 hours." });
    setTimeout(() => {
      setContactSent(false);
      setContact({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });
    }, 3500);
  };

  const onReserve = (e) => {
    e.preventDefault();
    if (!reservation.name || !reservation.date || !reservation.phone) {
      toast({ title: "Almost there", description: "Name, date and phone are required." });
      return;
    }
    setResSent(true);
    toast({
      title: "Table booked!",
      description: `Your seat is reserved at ${reservation.location} on ${reservation.date}.`,
    });
    setTimeout(() => {
      setResSent(false);
      setReservation({ name: "", date: "", time: "19:30", guests: "2", location: "Chennai — Mylapore", phone: "" });
    }, 3500);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      <PageBanner
        breadcrumb="Contact"
        eyebrow="✦ Say Vanakkam ✦"
        title="GET IN TOUCH"
        subtitle="Questions, feedback, or a craving that won’t go away — we’re listening."
        image="https://images.unsplash.com/photo-1620051787220-50768889e32c"
      />

      {/* Top contact info */}
      <section className="relative bg-white py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <MapPin size={20} />, title: "Visit Us", body: "23 Royapettah High Road,\nMylapore, Chennai 600004" },
              { icon: <Phone size={20} />, title: "Call Us", body: "+91 44 2811 0001\n+91 80 2520 0002" },
              { icon: <Mail size={20} />, title: "Email Us", body: "hello@madrascafe.in\norders@madrascafe.in" },
              { icon: <Clock size={20} />, title: "Hours", body: "Mon \u2013 Sun\n7:00 AM \u2013 11:00 PM" },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-brand-cream rounded-3xl p-6 hover:bg-white border border-transparent hover:border-brand-green/10 hover:shadow-softlg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-brand-green text-brand-gold flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-green text-lg">{c.title}</h3>
                <p className="font-body text-brand-ink/80 text-sm mt-2 whitespace-pre-line leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="relative bg-brand-cream py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-soft p-7 md:p-9"
          >
            <div className="font-display italic text-brand-green/80 text-base mb-1">— Drop us a note —</div>
            <h2 className="font-heading font-extrabold text-brand-green text-3xl md:text-4xl">Send a Message</h2>
            <form onSubmit={onContact} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="input" placeholder="Your name" />
                </Field>
                <Field label="Email" required>
                  <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="input" placeholder="you@email.com" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone">
                  <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="input" placeholder="+91 …" />
                </Field>
                <Field label="Subject">
                  <select value={contact.subject} onChange={(e) => setContact({ ...contact, subject: e.target.value })} className="input">
                    {["General Enquiry", "Feedback", "Catering", "Press / Media", "Franchise"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Message" required>
                <textarea rows={5} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} className="input resize-none" placeholder="Tell us what’s on your mind…" />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 bg-brand-green text-white font-heading font-semibold px-6 py-3.5 rounded-full hover:bg-brand-greendeep transition-all">
                {contactSent ? (<><Check size={16} /> Sent</>) : (<><Send size={16} /> Send Message</>)}
              </button>
            </form>
          </motion.div>

          {/* Reservation form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-green rounded-3xl shadow-soft p-7 md:p-9 text-white"
          >
            <div className="font-display italic text-brand-gold text-base mb-1">— Save your seat —</div>
            <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl">Reserve a Table</h2>
            <form onSubmit={onReserve} className="mt-6 space-y-4">
              <Field label="Name" dark required>
                <input value={reservation.name} onChange={(e) => setReservation({ ...reservation, name: e.target.value })} className="input-dark" placeholder="Your name" />
              </Field>
              <Field label="Phone" dark required>
                <input value={reservation.phone} onChange={(e) => setReservation({ ...reservation, phone: e.target.value })} className="input-dark" placeholder="+91 …" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" dark required icon={<Calendar size={14} />}>
                  <input type="date" value={reservation.date} onChange={(e) => setReservation({ ...reservation, date: e.target.value })} className="input-dark" />
                </Field>
                <Field label="Time" dark>
                  <select value={reservation.time} onChange={(e) => setReservation({ ...reservation, time: e.target.value })} className="input-dark">
                    {["08:00","10:00","12:30","14:00","18:00","19:30","21:00"].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Guests" dark icon={<Users size={14} />}>
                  <select value={reservation.guests} onChange={(e) => setReservation({ ...reservation, guests: e.target.value })} className="input-dark">
                    {["1","2","3","4","5","6","8","10","12+"].map((g) => (<option key={g}>{g}</option>))}
                  </select>
                </Field>
                <Field label="Location" dark>
                  <select value={reservation.location} onChange={(e) => setReservation({ ...reservation, location: e.target.value })} className="input-dark">
                    {["Chennai — Mylapore","Bengaluru — Indiranagar","Mumbai — Bandra","Hyderabad — Jubilee Hills"].map((l) => (<option key={l}>{l}</option>))}
                  </select>
                </Field>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-heading font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-all">
                {resSent ? (<><Check size={16} /> Booked</>) : (<><Calendar size={16} /> Book a Table</>)}
              </button>
            </form>
          </motion.div>
        </div>
        <style>{`
          .input { width: 100%; background: #fffaf0; border: 1px solid rgba(30,92,59,0.15); border-radius: 14px; padding: 12px 14px; font-family: 'Inter', sans-serif; font-size: 14px; color: #1e5c3b; outline: none; transition: all 0.25s ease; }
          .input::placeholder { color: rgba(30,92,59,0.45); }
          .input:focus { background: #ffffff; border-color: #1e5c3b; box-shadow: 0 0 0 4px rgba(30,92,59,0.08); }
          .input-dark { width: 100%; background: rgba(255,255,255,0.08); border: 1px solid rgba(243,183,0,0.30); border-radius: 14px; padding: 12px 14px; font-family: 'Inter', sans-serif; font-size: 14px; color: #ffffff; outline: none; transition: all 0.25s ease; }
          .input-dark::placeholder { color: rgba(255,255,255,0.5); }
          .input-dark:focus { background: rgba(255,255,255,0.13); border-color: #f3b700; box-shadow: 0 0 0 4px rgba(243,183,0,0.18); }
          .input-dark option { color: #1e5c3b; }
        `}</style>
      </section>
    </motion.main>
  );
};

const Field = ({ label, required, children, dark, icon }) => (
  <label className="block">
    <span className={`font-heading font-semibold text-xs uppercase tracking-[0.18em] mb-1.5 inline-flex items-center gap-1.5 ${dark ? "text-brand-gold" : "text-brand-green"}`}>
      {icon}
      {label}
      {required && <span className={dark ? "text-brand-gold" : "text-brand-green/60"}>*</span>}
    </span>
    {children}
  </label>
);

export default ContactPage;
