'use client';

import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import Logo from '../common/Logo';
import { useRouter } from 'next/navigation';

const Landing = () => {
	const router = useRouter();

	const handleClick = (routerName: string) => {
		router.push(`/${routerName}`);
	};

	return (
		<Wrapper>
			<TitleWrapper>
				<Logo />
				<Explain>대학생들의 효율적인 의사소통을 위해</Explain>
			</TitleWrapper>
			<Character src="/img/PaperRun.png" alt={'ch'} />
			<BtnWrapper>
				<Btn color="#4F7B59" routerName="login" text="로그인하기" />
				<Btn color="#93613B" routerName="signup" text="회원가입하기" />
				<TermsWrapper>
					<div onClick={() => handleClick('service')}>서비스이용약관</div>
					<div>|</div>
					<div onClick={() => handleClick('privacy')}>개인정보처리방침</div>
				</TermsWrapper>
			</BtnWrapper>
		</Wrapper>
	);
};

export default Landing;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	background-color: #fff5e0;
`;

const TitleWrapper = styled.div`
	width: 90%;
`;

const Explain = styled.div`
	font-size: 2rem;
	font-weight: 400;
	color: #93613b;
`;

const Character = styled.img`
	width: 250px;
	min-width: 250px;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
`;

const TermsWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	gap: 2rem;
`;
