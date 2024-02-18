

const FAQ = () => {
    return (
        <div className="m-8">
            <div>
                <h1 className="text-5xl font-bold text-center mt-16 ">Frequently Asked Questions (FAQ)</h1>
            </div>
            <div className="collapse collapse-arrow bg-slate-50 mt-12 border-4">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-bold">
                    1. When is the best time to buy a car?
                </div>
                <div className="collapse-content">
                    <p className="text-justify font-semibold">New plate registrations are in March and September every year, so expect plenty of activity around those months as car buyers look to sell their old cars and dealerships unveil their new stock. But really, there’s no wrong time to buy a car. Great deals are listed daily, and you could find the car of your dreams at any moment – just save a search on AutoTrader and we’ll alert you as soon as your dream car is listed on our site.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-slate-50 mt-4 border-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    2. Should I buy an electric car?
                </div>
                <div className="collapse-content">
                    <p className="text-justify font-semibold">The electric car market is starting to boom. There’s more choice than ever before, better tech, improved batteries and charging times, and a healthier electric car charging infrastructure. With more used electric cars entering the market, EVs are becoming more affordable to more buyers too. Electric cars might not be right for everyone right now, but with everything from electric city cars to electric SUVs now being released, it’s well worth taking a look before you buy your next car. Electric cars produce fewer emissions and also tend to be cheap to run – charging an electric car from home costs much less than a tank of petrol, and then there are the savings you’ll make on road tax and servicing. AutoTrader have more electric cars listed than any other site, so if you think you’re ready to make the switch or want to learn more, head to our electric car hub.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-slate-50 mt-4 border-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    3. Should I buy a new car?
                </div>
                <div className="collapse-content">
                    <p className="text-justify font-semibold">We all dream of that brand-new car on the driveway and, with some great finance deals and lease deals available on leading make models, that dream could be in reach. Getting behind the wheel of a brand-new car can get you the latest tech, a full manufacturer warranty and better fuel efficiency, amongst many other perks. New cars might not be affordable for everyone (always budget properly and make sure you can afford a car before you commit), but they’re more accessible than you might think.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-slate-50 mt-4 border-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    4. Can I buy a car online?
                </div>
                <div className="collapse-content">
                    <p className="text-justify font-semibold">Buying online is booming, and you can now get a brand-new car delivered to your door in all its glory. Just look for participating dealerships on AutoTrader, find your dream car and arrange your delivery date when you’re ready. We’re working to keep you safe and secure when shopping online and, with AutoTrader, you can do more online – from finding that dream car to financing it.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-slate-50 mt-4 border-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    5. Are used cars reliable?
                </div>
                <div className="collapse-content">
                    <p className="text-justify font-semibold">The UK’s used car market is massive, and so it’s worth doing your research before you buy. We’d encourage used car buyers to get a vehicle history check so they can be sure the car they’re buying is as advertised. It’s the easiest way to avoid a nasty surprise. Check our expert review to see how cars scored for reliability, safety and comfort (amongst other key areas), and take the car for a test drive to make sure it’s right for you. Used cars listed on AutoTrader have to pass a five-point check, so you can shop in confidence knowing they aren’t written off, stolen, scrapped, imported or exported.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;