export type ContentsType = {
	id: number,
      title: string,
      content: string,
      limitTime: Date
      writer: string,
      imageUrl1: string,
      imageUrl2: string,
      createdTime: Date
      modifiedTime: Date
      teamName: string,
      readMemberCount: number,
      notReadMemberCount: number,
      checkStatus: string,
}
export type TeamType = {
	id: number,
      name: string,
      description: string,
      teamSize: number,
      imageUrl: string,
      link: string,
      createdTime: string,
      modifiedTime: Date
}