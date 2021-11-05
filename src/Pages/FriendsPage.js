import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../Asset/GlobalStyle";
import FriendsItem from "../Components/FriendsItem";
import TopBar from "../Components/TopBar";

import Menu from "../Components/Menu";

const Wrapper = styled.div`
  display: flex;
`;

const FriendsBox = styled.div`
  padding-left: 1rem;
  width: 100%;
`;

const FriendsPage = () => {
  const [friends, setFriends] = useState([
    {
      id: 1,
      photo:
        "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MzBfMjg2/MDAxNTAxMzQ1ODMyOTA5.k7YVeM9Z7srFguRFLbrHVCcHtJ-2wDbLfiFHD5wN4v4g.kCtwhcsXSV5kIk4o4qQNK61Wbcnr5QdrZbGPWpvbaNcg.PNG.lastmistake/%EC%96%B4%ED%94%BC%EC%B9%986.png?type=w800",
      name: "어피치",
      text: "나는 어피치!",
    },
    {
      id: 2,
      photo: "https://t1.daumcdn.net/cfile/blog/260CA94D57CC186328",
      name: "네오",
      text: "교수님 전 잘 듣고 있어요",
    },
    {
      id: 3,
      photo:
        "https://i.pinimg.com/originals/78/a2/4e/78a24e8c7ee392147864fd1059cf74da.jpg",
      name: "무지",
      text: "무지 졸려",
    },
  ]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <FriendsBox>
        <TopBar />
        <h2>친구목록</h2>
        {friends.map((friend) => (
          <>
            <FriendsItem
              key={friend.id}
              name={friend.name}
              photo={friend.photo}
              text={friend.text}
            />
          </>
        ))}
      </FriendsBox>
    </Wrapper>
  );
};

export default FriendsPage;
