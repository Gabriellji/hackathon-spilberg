import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../data/theme";
import { Context } from "../../context/Context";
import { bestIdeas } from "../../data/data";
import UserIdea from "./manager/user-idea/UserIdea";

const StyledHome = styled.div`
    padding: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
        width: 100%;
        text-align: center;
        color: ${theme.color.orange};  
    }
`;

const StyledHomeTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: ${theme.color.orange};
`;

const StyledFameContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div:first-child {
        box-shadow: inset 0px 0px 30px 75px rgba(255, 215, 0, 0.75);
    }
    > div:nth-child(2) {
        box-shadow: inset 0px 0px 30px 75px rgba(192, 192, 192, 0.75);
    }
    > div:last-child {
        box-shadow: inset 0px 0px 30px 75px rgba(205, 127, 50, 0.75);
    }

    > div:hover{
        background-color: white;
    }

    @media (min-width: 768px) {
        flex-direction: row;

        > div:first-child {
            order: 1;
            margin-bottom: 200px;
        }
        
        > div:nth-child(2) {
            order: 0;
            margin-top: 100px;
            margin-bottom: 100px;
        }

        > div:last-child {
            order: 2;
            margin-top: 200px;
        }
    }
`;

const Home = () => {
    const context = useContext(Context);

    return (
        <StyledHome>
            <StyledHomeTitle>WALL OF FAME</StyledHomeTitle>
            { context.admin
                ? <h3>Best ideas brought up last month by our employees</h3>
                : <h3>Our best idea from last month</h3>
            }
            <StyledFameContainer>
                {bestIdeas.map((idea, index) => (
                    <UserIdea
                        key={idea.id}
                        id={idea.id}
                        name={idea.name}
                        title={idea.title}
                        question1={idea.question1}
                        question2={idea.question2}
                        question3={idea.question3}
                        totalLikes={idea.totalLikes.length}
                        created={idea.created}
                        rank={index}
                    />
                ))}
            </StyledFameContainer>
        </StyledHome>
    )
};

export default Home;
