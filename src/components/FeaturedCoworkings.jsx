import React from 'react';
import Image from 'next/image';
import { Phone, Briefcase, FileText, Building2, Mail, UserCheck, Users, Mail as MailIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const FeaturedCoworking = () => {
    const features = [
        { icon: <Briefcase className="w-5 h-5 text-yellow-600" />, text: "Company Registration" },
        { icon: <FileText className="w-5 h-5 text-yellow-600" />, text: "GST Registration" },
        { icon: <Building2 className="w-5 h-5 text-yellow-600" />, text: "Business Address" },
        { icon: <Mail className="w-5 h-5 text-yellow-600" />, text: "Mailing Address" },
        { icon: <UserCheck className="w-5 h-5 text-yellow-600" />, text: "Reception Services" },
        { icon: <Users className="w-5 h-5 text-yellow-600" />, text: "Meeting Room Access" },
    ];

    return (
        <div className="hidden sm:block">
            <section className="px-6">
                <SectionHeader highlight="Featured" rest="Coworking" />
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-20 mt-10">
                    <div className="text-3xl font-serif font-bold tracking-tighter text-slate-900">wework</div>
                    <div className="text-3xl font-sans font-bold tracking-tighter text-orange-600">awfis</div>
                    <div className="text-2xl font-sans font-bold text-orange-500">innov8</div>
                    <div className="text-xl font-sans font-bold text-teal-500">91SPRINGBOARD</div>
                    <div className="text-xl font-sans font-medium text-slate-700 flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-orange-500 rounded-sm"></div>
                        InstaOffice
                    </div>
                    <div className="text-xl font-sans font-medium text-blue-800 flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                        INDIQUBE
                    </div>
                    <div className="text-sm font-sans font-bold text-slate-900 leading-tight flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                        <div>BHIVE<br />GROUP</div>
                    </div>
                </div>
            </section>

            <section className="px-6  py-12">
                <div className="relative rounded-3xl overflow-hidden bg-amber-50 shadow-sm border border-amber-100">
                    <div className="absolute inset-0 z-0 flex justify-end">
                        <div className="w-full md:w-2/3 h-full relative">
                            <div className="absolute inset-0 bg-linear-to-r from-amber-50 via-amber-50/90 to-transparent z-10"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                                alt="Office Meeting"
                                fill
                                className="object-cover opacity-60"
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                        </div>
                    </div>

                    <div className="relative z-20 p-8 md:p-12  max-w-4xl">
                        <h2 className="text-3xl   text-slate-900 mb-10">
                            Book Your Virtual Office <span className="text-yellow-500">with CoFynd</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="shrink-0">
                                        {feature.icon}
                                    </div>
                                    <span className="text-[12px] text-slate-800">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-8 text-slate-700  text-[12px]">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-slate-500" />
                                <span>+91 9311 32 8043</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="w-4 h-4 text-slate-500" />
                                <span>hello@cofynd.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
