'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { answerToRequest, checkTeamRequestList } from '@/apis/group';
import { AcceptRequest } from '@/types/request';
import styled from 'styled-components';

const GroupAcceptPage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{ id: string }>();
	const groupId = params.id;
	const roleCategory = ['ALL', 'MEMBER', 'LEADER'];
	const [requestList, setRequestList] = useState<AcceptRequest[]>();
	const [selectedRole, setSelectedRole] = useState<string>('ALL');

	const filteredRequestList = requestList?.filter((item) => {
		if (selectedRole === 'ALL') {
			return true;
		} else {
			return item.requestRole === selectedRole;
		}
	});

	const fetchData = async () => {
		try {
			const result = await checkTeamRequestList(groupId);
			setRequestList(result);
		} catch (error) {
			console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
		}
	};

	const handleSelectBtn = (role: string) => {
		setSelectedRole(role);
	};

	const handleAcceptBtn = async (isAccept: boolean, memberId: number, memberName: string) => {
    const confirmationMessage = `${memberName}님의 요청을 ${isAccept ? '수락' : '거부'}하시겠습니까?`;
		if (window.confirm(confirmationMessage)) {
      try {
          const result = await answerToRequest(Number(groupId), Number(memberId), isAccept);
          alert('요청을 성공적으로 처리했습니다.');
		  fetchData(); 
      } catch (error) {
          console.error('요청 처리 중 오류가 발생했습니다:', error);
          alert('요청 처리 중 오류가 발생했습니다.');
      }
  } else {
      alert('요청 처리가 취소되었습니다.');
  }
	};

	useEffect(() => {
		const getDataList = async () => {
			const result = await checkTeamRequestList(groupId);
			setRequestList(result);
		};
		getDataList();
	}, [groupId]);

	return (
		<Main>
			<BtnGroup>
				{roleCategory.map((role) => (
					<GroupSortBtn key={role} $active={selectedRole === role} onClick={() => handleSelectBtn(role)}>
						{role}
					</GroupSortBtn>
				))}
			</BtnGroup>
			<CardWrapper>
				{filteredRequestList?.map((request) => (
					<Data key={request.requestId}>
						<div className="user">{request.username}</div>
						<Row>
							<Btn className="role">{request.requestRole == 'MEMBER' ? '멤버' : '리더'}</Btn>
							<Btn
								className="selectBtn"
								onClick={() => {
									handleAcceptBtn(true, request.memberId, request.username);
								}}
							>
								수락
							</Btn>
							<Btn
								className="selectBtn"
								onClick={() => {
									handleAcceptBtn(false, request.memberId,request.username);
								}}
							>
								거절
							</Btn>
						</Row>
					</Data>
				))}
			</CardWrapper>
			{/* {filteredRequestList ? <></> : <Data>현재 들어온 요청이 없습니다</Data>} */}
		</Main>
	);
};

export default GroupAcceptPage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;
const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const BtnGroup = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	gap: 1rem;
	margin-top: 2rem;
	margin-bottom: 1.3rem;
`;
const GroupSortBtn = styled.div<{ $active: boolean }>`
	background-color: ${(props) => (props.$active ? ' #4f7b59' : 'none')};
	color: ${(props) => (props.$active ? 'white' : '#4f7b59')};
	border: 1.5px solid #4f7b59;
	padding: 0.2rem 1.3rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	cursor: pointer;
`;
const Data = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
	.user {
		font-size: 2rem;
		font-weight: 600;
	}
	.btngroup {
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.role {
		background-color: #4f7b59;
		color: white;
	}
	.selectBtn {
		cursor: pointer;
		border: 1px #4f7b59 solid;
		color: #4f7b59;
		background-color: none;
	}
`;
const Btn = styled.div`
	padding: 0.4rem 1.7rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Row = styled.div`
display:flex;
gap: 0.5rem;
`