import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: "Chidubem" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        subtext="Access and manage your account and transactions efficiently."
                        user={loggedIn?.firstName || "Guest"}
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    );
};

export default Home;