import React from 'react';
import styled from 'styled-components';
import NoneNoticeCard from '../common/NoneNoticeCard';
import GroupList from './GroupList';

export const groupSample = [{
    id: 1,
    group : '구름톤구름톤구름톤구름톤구름톤구름톤구름',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 2,
    group : '구름톤 유니브 3기',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 3,
    group : '구름톤 유니브 4기',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 4,
    group : '구름톤 유니브 5기',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 5,
    group : '구름톤 유니브 6기',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 6,
    group : '구름톤 유니브 7기',
    profile: '/img/nothingLogo.png',
    count: 22
},{
    id: 7,
    group : '구름톤 유니브 8기',
    profile: '/img/nothingLogo.png',
    count: 22
},
]

const MyGroupStateSection = () => {
	return (
		<Main>
			{/* <NoneNoticeCard text="아직 생성된 그룹이 없어요!" /> */}
			<GroupList dataList={groupSample}/>
		</Main>
	);
};

export default MyGroupStateSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
