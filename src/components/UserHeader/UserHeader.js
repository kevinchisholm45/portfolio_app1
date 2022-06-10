import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from '@carbon/icons-react';
import { HeaderContainer, Header, Image, ViewResumeLink, NameHeader} from "./styles";

const UserHeader = ({ user }) => {
    const location = useLocation();
    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
                <div>
                <NameHeader>{user.basics.name}</NameHeader>
                <h4>
                    <a
                    href={`https://gitconnected.com/${user.basics.username}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    >
                    @{user.basics.username}
                    </a>
                </h4>
                <p>{user.basics.label}</p>
                <p>Located in {user.basics.region}</p>
                <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
                <p>{user.basics.headline}</p>
                
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={require('../../photos/2022Resume.jpg')}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Resume</span>
                    <ArrowRight />
                </ViewResumeLink>
            </div>
            </HeaderContainer>
    );

};

export default UserHeader;