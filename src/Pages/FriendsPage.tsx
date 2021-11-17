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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  background-color: #fef01b;
  padding: 0.6rem;
  border-radius: 10px;
  margin-right: 1rem;
`;

const Input = styled.input`
  width: 90%;
  border-color: none;
  outline: none;
  height: 2rem;
  margin: 1rem 0rem 2rem 2rem;
`;

const FriendsPage = () => {
  const [show, setShow] = useState(false);
  const [searchFriends, setSearchFriends] = useState("");
  const [friends] = useState([
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
      text: "집가고싶네오",
    },
    {
      id: 3,
      photo:
        "https://item.kakaocdn.net/do/d97f27efd1d10d84215842e2e12752939f5287469802eca457586a25a096fd31",
      name: "튜브",
      text: "교수님 미워요",
    },
    {
      id: 4,
      photo:
        "https://i.pinimg.com/originals/78/a2/4e/78a24e8c7ee392147864fd1059cf74da.jpg",
      name: "무지",
      text: "무지 졸려",
    },
  ]);

  function onClick() {
    setShow(!show);
  }

  function FindFriends() {
    let data = friends.filter((data) => data.name.indexOf(searchFriends) > -1);
    let friendsList: {
      id: number;
      photo: string;
      name: string;
      text: string;
    }[] = [];
    data.map((friend, i) => friendsList.push(data[i]));
    console.log(friendsList);

    return friendsList.map((friend) => (
      <FriendsItem
        key={friend.id}
        name={friend.name}
        photo={friend.photo}
        text={friend.text}
      />
    ));
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Menu />
      <FriendsBox>
        <TopBar />
        <Row>
          <h2>친구목록</h2>
          <Button onClick={onClick}>친구 검색</Button>
        </Row>
        {show ? (
          <Input
            style={{ display: "block" }}
            type="text"
            onChange={(e) => {
              setSearchFriends(e.target.value);
            }}
          />
        ) : (
          <Input style={{ display: "none" }} />
        )}
        {FindFriends()}
        {/* {friends.map((friend) => (
          <FriendsItem
            key={friend.id}
            name={friend.name}
            photo={friend.photo}
            text={friend.text}
          />
        ))} */}
      </FriendsBox>
    </Wrapper>
  );
};

export default FriendsPage;
