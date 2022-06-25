import React from 'react'
import HeroSection from "../../Home/HeroSection/Hero"
import RecentWork from '../RecentWork/RecentWork'
import Patreon from '../Patreon/Patreon'
import ExclusiveModel from '../ExclusiveModel/ExclusiveModel'

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <RecentWork/>
            <Patreon/>
            <ExclusiveModel/>
        </div>
    )
}

export default HomePage
