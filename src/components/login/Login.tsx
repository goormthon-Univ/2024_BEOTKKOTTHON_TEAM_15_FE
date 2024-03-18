'use client';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import { useRouter } from 'next/navigation';

const Login = () => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [isSignupFailed, setIsSignupFailed] = useState(false);
	const router = useRouter();

	const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};

	const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPw(e.target.value);
	};

	const onClick = () => {
		router.push('/home');
	};

	return (
		<Wrapper>
			<TitleWrapper>
				<Logo />
				<Explain>우리의 더 효율적인 의사소통</Explain>
			</TitleWrapper>
			<DivisionWrapper>
				<div>회원가입</div>
				<div>|</div>
				<div className="select">로그인</div>
			</DivisionWrapper>
			<SignupWrapper>
				<Input onChange={handleIdChange} placeholder="ID를 입력해주세요!" />
				<Input onChange={handlePwChange} placeholder="PW를 입력해주세요!" type="password" />
			</SignupWrapper>
			<CheckWrapper>
				<button onClick={onClick}>확인</button>
			</CheckWrapper>
		</Wrapper>
	);
};

export default Login;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	background-color: #fff5e0;
`;

const TitleWrapper = styled.div`
	width: 50%;
`;

const Explain = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;

const SignupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const DivisionWrapper = styled.div`
	display: flex;
	gap: 1rem;
	font-size: 1.5rem;
	div {
		font-weight: bold;
		color: grey;
	}
	.select {
		color: black;
	}
`;

const Input = styled.input`
	width: 280px;
	padding: 1.4rem 2rem;
	font-size: 16px;
	border-radius: 7px;
	background-color: #d9d9d9;
	border: 1px solid #d9d9d9;
`;

const CheckWrapper = styled.div`
	width: 310px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;