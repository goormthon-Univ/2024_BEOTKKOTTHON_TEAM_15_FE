import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

export const createTeam = async (body: FormData) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}/teams`, body, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart-form-data',
			},
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 팀 가입요청 (requestrole : LEADER 나 MEMBER로 전달)
export const requestTeamAccept = async (teamId: number, requestrole: 'MEMBER' | 'LEADER') => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(
			`${baseURL}/teams/${teamId}`,
			{
				requestrole: requestrole,
			},
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		return response;
	} catch (error) {
        console.log('Error:', error);
        return false;
    }
};

// 팀 가입요청 리스트 확인
export const checkTeamRequestList = async (teamId: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams/${teamId}/participations`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response.data.result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 팀 가입요청 수락 or 거절
export const answerToRequest = async (teamId: number, memberId: number, isAccept: boolean) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(
			`${baseURL}/teams/${teamId}/participations`,
			{
				memberId: memberId,
				isAccept: isAccept,
			},
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
