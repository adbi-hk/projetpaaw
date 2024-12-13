import React  from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";

const Home = () =>{
    const loggedIn ={firstName:'dyaa'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting" 
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Managing your time is way more easier now !"
                    />
                    <TotalBalanceBox 
                    accounts = {[]}
                    totalBanks ={22}
                    totalCurrentBalance = {1250.35}

                    />
                </header>
            </div>
        </section>
    )
}

export default Home