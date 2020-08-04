import React from 'react';
import styled, {keyframes} from 'styled-components';

const expandWidth = keyframes`{
    0% { width: 0; }
    50% { width: 50%; }
    100% { width: 100%; }
}`;

const ProgressWrapper = styled.div` 
    position: relative;
    height: 4px;
    width: 320px;
    border-radius: 4px;
    background: #E5E5E5;
    margin-top: 10px;
`

const Progress = styled.div`
    background-color: #ff4a55;
    height: 100%;
    border-radius: inherit;
    animation: ${expandWidth} 2s linear;
`;

const ProgressBarContainer = styled.div`
    padding: 0 30px;
`

export const ProgressBar = (props) => {
    return (
        <ProgressBarContainer>
            <div>We are gathering available privacy settings...</div>
            <ProgressWrapper>
                <Progress />
            </ProgressWrapper>
        </ProgressBarContainer>
    )
}