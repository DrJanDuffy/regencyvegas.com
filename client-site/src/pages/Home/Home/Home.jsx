import Properties from "../../Properties/Properties";
import Blogs from "../../Shared/Blogs/Blogs";
import Footer from "../../Shared/Footer/Footer";
import LocationForYou from "../../Shared/LocationForYou/LocationForYou";
import UserReview from "../../Shared/Reviews/UserReview/UserReview";
import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import RegencySection from "../../Shared/Regency/RegencySection";

const Home = () => {
    return (
        <>
            <Banner />
            <Advertisement />
            <RegencySection />
            <Properties />
            <LocationForYou />
            <UserReview />
            <Blogs />
            <Footer />
        </>
    );
};

export default Home;