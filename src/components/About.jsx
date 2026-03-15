import Link from "next/link"

export const About = () => {
    return (
        <div className="px-6 py-10 bg-slate-100 space-y-5 ">
            <div className="">
                <h1 className="text-slate-950 text-xl font-semibold mb-3">CoFynd: Coworking Space Renting Made Easy</h1>
                <p className="text-base text-slate-800 mb-3 font-light">CoFynd is a technology-driven online marketplace that has set off on a mission to simplify and manage the flourishing ecosystem of Coworking, Coliving and Private Office Spaces all under one roof. We serve as an online discovery and booking platform for 100,000+ verified spaces for rent in 25+ cities of India leveraging easy access and convenience. Anytime  Anywhere. The whole platform is built around the three most important aspects of the future millennial behaviour - Freedom, Flexibility & Fulfillment. With an excellent user interface and unmatched user experience, we provide unbiased and unified property listings which creates a value proposition for all our stakeholders.</p>
                <span className="text-base text-slate-800 font-light">
                    CoFynd has a solution for all kinds of your space rental needs like Coworking Spaces, Office Spaces and Coliving Spaces. Whether you are looking for affordable shared office space for rent or you are looking for amenities loaded office space, Cofynd has a solution for all your needs.
                </span>
            </div>
            <div>
                <h1 className="text-slate-950 text-xl font-semibold mb-3">
                    Coworking Office Spaces on CoFynd
                </h1>

                <p className="text-base text-slate-800 mb-3 font-light">
                    CoFynd offers 100,000+ coworking spaces for rent in 25+ cities of India.
                    We have a strong presence starting from -
                    {" "}
                    <Link href="/coworking/gurugram" className="text-blue-600">Gurgaon</Link>,{" "}
                    <Link href="/coworking/delhi" className="text-blue-600">Delhi</Link>,{" "}
                    <Link href="/coworking/noida" className="text-blue-600">Noida</Link>,{" "}
                    <Link href="/coworking/bangalore" className="text-blue-600">Bangalore</Link>,{" "}
                    <Link href="/coworking/hyderabad" className="text-blue-600">Hyderabad</Link>,{" "}
                    <Link href="/coworking/mumbai" className="text-blue-600">Mumbai</Link>,{" "}
                    <Link href="/coworking/pune" className="text-blue-600">Pune</Link>,{" "}
                    <Link href="/coworking/indore" className="text-blue-600">Indore</Link>,{" "}
                    <Link href="/coworking/chennai" className="text-blue-600">Chennai</Link>,{" "}
                    <Link href="/coworking/jaipur" className="text-blue-600">Jaipur</Link>,{" "}
                    <Link href="/coworking/lucknow" className="text-blue-600">Lucknow</Link>,{" "}
                    <Link href="/coworking/ahmedabad" className="text-blue-600">Ahmedabad</Link>,{" "}
                    <Link href="/coworking/kolkata" className="text-blue-600">Kolkata</Link>,{" "}
                    <Link href="/coworking/goa" className="text-blue-600">Goa</Link>,{" "}
                    <Link href="/coworking/chandigarh" className="text-blue-600">Chandigarh</Link>,{" "}
                    <Link href="/coworking/coimbatore" className="text-blue-600">Coimbatore</Link>,{" "}
                    <Link href="/coworking/kochi" className="text-blue-600">Kochi</Link> and more.
                    Our spaces speak volumes of present-day amenities like quirky workspaces, spacious meeting & training rooms, uninterruptible wifi connection, strict CCTV surveillance, super housekeeping, large pantry area, 24-hour power and water backup, ample parking space, recreational corners and most importantly proper disinfection procedures have been taken care of in reply to the pandemic scenario. For an economical fee, businesses/individuals can choose from a day pass for a day’s experience of our spaces. For longer durations, there is the availability of hot desks, dedicated
                </p>
            </div>

            <div>
                <h1 className="text-slate-950 text-xl font-semibold mb-3">
                    Renting Office Spaces on CoFynd
                </h1>

                <p className="text-base text-slate-800 mb-3 font-light">
                    Finding an office space on CoFynd is as easy as breathing. You simply search for your preferred location and shortlist your office spaces for rent and leave your query by filling the form. CoFynd offers office spaces for rent in 7 cities of India -
                    {" "}
                    <Link href="/office-space/rent/gurugram" className="text-blue-600">Gurgaon</Link>,{" "}
                    <Link href="/office-space/rent/delhi" className="text-blue-600">Delhi</Link>,{" "}
                    <Link href="/office-space/rent/noida" className="text-blue-600">Noida</Link>,{" "}
                    <Link href="/office-space/rent/bangalore" className="text-blue-600">Bangalore</Link>,{" "}
                    <Link href="/office-space/rent/hyderabad" className="text-blue-600">Hyderabad</Link>,{" "}
                    <Link href="/office-space/rent/mumbai" className="text-blue-600">Mumbai</Link>,{" "}
                    and {" "}
                    <Link href="/office-space/rent/pune" className="text-blue-600">Pune</Link>,{" "}
                    These spaces are bound to provide a quiet, confidential and secure environment, while at the same time enjoying the benefits of a community. One is sure to effectively rent a space as they would only pay for the floor space required while enjoying access to spacious meeting & conference rooms, wifi connection, security, housekeeping, pantry, recreational facilities and more. We have tied up with the best office spaces for lease.
                </p>
            </div>


            <div>
                <h1 className="text-slate-950 text-xl font-semibold mb-3">
                    Coliving Spaces on CoFynd
                </h1>

                <p className="text-base text-slate-800 mb-3 font-light">
                    CoFynd offers 1000+ coliving spaces in 8+ cities of India. Our shared living spaces are located in
                    {" "}
                    <Link href="/co-living/gurugram" className="text-blue-600">Gurgaon</Link>,{" "}
                    <Link href="/co-living/delhi" className="text-blue-600">Delhi</Link>,{" "}
                    <Link href="/co-living/noida" className="text-blue-600">Noida</Link>,{" "}
                    <Link href="/co-living/bangalore" className="text-blue-600">Bangalore</Link>,{" "}
                    <Link href="/co-living/hyderabad" className="text-blue-600">Hyderabad</Link>,{" "}
                    <Link href="/co-living/mumbai" className="text-blue-600">Mumbai</Link>,{" "}
                    <Link href="/co-living/pune" className="text-blue-600">Pune</Link>,{" "}
                    and {" "}
                    <Link href="/co-living/indore" className="text-blue-600">Indore</Link>.{" "}
                    They are completely equipped with facilities such as fully furnished vibrant rooms, no separate bills, fully stocked kitchen, flexible lease, laundry, high-speed wifi, swimming pool, uninterruptible power, water backup, security, proximity to the nearest local transport, ample parking space, regular cleaning, sanitizing, common movie hall, microwave, water purifier, food services, emergency response staff, gym, professional host and lastly, a super community for all your social interactions.
                </p>
            </div>

            <div>
                <h1 className="text-slate-950 text-xl font-semibold mb-3">
                    Why CoFynd?
                </h1>

                <p className="text-base text-slate-800 mb-3 font-light">
                    CoFynd truly understands all the pain points that one goes through in looking for the perfect coworking, coliving or private office space. Thus, presenting to you our reliable spaces- a perfect blend of modern lifestyle, cost-effectiveness, community interaction and convenience. Our current platform enables you to search, book and experience according to your needs and preferences.
                </p>
                <p className="text-base text-slate-800 mb-3 font-light">
                    We guarantee the best modern facilities for your smooth business operations. From vibrant workspaces, spacious meeting rooms, daily housekeeping, seamless wifi connection, recreational corners, 24-hour power and water backup, space for organising events, ample parking space, proximity to the nearest transport system and most chiefly all safety measures have been kept in place during the ongoing pandemic scenario.
                </p>
                <p className="text-base text-slate-800 mb-3 font-light">
                    We have collaborated with the big names in India-{" "}
                    <Link href="/brand/wework" className="text-blue-600">WeWork</Link>,{" "}
                    <Link href="/brand/innov8" className="text-blue-600">Innov8</Link>,{" "}
                    <Link href="/brand/settl" className="text-blue-600">Settl</Link>,{" "}
                    <Link href="/brand/91springboard" className="text-blue-600">91springboard</Link>,{" "}
                    <Link href="/brand/covie" className="text-blue-600">Covie</Link>,{" "}
                    <Link href="/brand/thetribe" className="text-blue-600">The Tribe</Link>,{" "}
                    <Link href="/brand/awfis" className="text-blue-600">Awfis</Link>,{" "}
                    <Link href="/brand/instaoffice" className="text-blue-600">InstaOffice</Link>,{" "}
                    <Link href="/brand/hyphen" className="text-blue-600">Hyphen</Link>,{" "}
                    <Link href="/brand/springhouse" className="text-blue-600">Spring House</Link>,{" "}
                    <Link href="/brand/flock" className="text-blue-600">Flock</Link>,{" "}
                    <Link href="/brand/bhive" className="text-blue-600">Bhive</Link>,{" "}
                    and others. So, whether one is a student or working professional who is looking for a working or living space with a modern-day touch, then without thinking a two, hold on to your futile search. With our unmatched user interface and experience, one can easily compare the prices, amenities, accessibility and much more in an untangled manner.              </p>

                <p className="text-base text-slate-800 mb-3 font-light">
                    Office renting space is traditionally a very unorganized sector and most of the startup founders/business owners struggle in finding office space of their desire. Often tenants have to agree to unreasonable terms and conditions like lockins, untimely rent increments, invest in immovable office interiors etc. CoFynd is a professionally managed team of experts who have years of experience in real estate and truly understands the pain of tenants. CoFynd as your coworking space renting partner will take care of all your office needs so that you can focus on your business and team productivity.
                </p>
                <p className="text-base text-slate-800 mb-3 font-light">
                    So, what’s holding you back? Keep calm and begin your happy space journey today!


                </p>
            </div>
        </div>
    )
}