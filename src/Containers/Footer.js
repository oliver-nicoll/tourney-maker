import React from 'react';
import Footer from '../Components/Footer'
import Icon from '../Components/Icons'


export function FooterContainer () {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="/">Home</Footer.Link>
                    <Footer.Link href="/about">About</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Tournaments</Footer.Title>
                    <Footer.Link href="/events">View Tournaments</Footer.Link>
                    <Footer.Link href="/events">Create Tournament</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Teams</Footer.Title>
                    <Footer.Link href="/teams">View Teams</Footer.Link>
                    <Footer.Link href="/teams">Create Teams</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>ScoreBoard</Footer.Title>
                    <Footer.Link href="/scoreboard">Keep Score</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}