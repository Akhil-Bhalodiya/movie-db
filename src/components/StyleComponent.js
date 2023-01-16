import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: rgb(0, 0, 0);
`;

const Container = styled.div`
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(70, 16, 16, 0.2);
  width: 350px;
  min-height: 290px;
  margin: 0px 20px 20px 0;
  cursor: pointer;
  transition: 0.8s;
  justify-items: center;
  border-radius: 8px;
`;

const ImgClass = styled.img`
  width: 300px;
  height: 220px;
  padding-top: 23px;
  margin-left: 23px;
  margin-right: 23px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  justify-content: center;
  text-align: center;
  margin: auto;
  border: 2px;
  height: 23px;
  width: 100px;
  border-radius: 5px;
  display: flex;
  margin-left: auto;
`;

const ImageClass = styled.img`
  width: 400px;
  height: 300px;
  padding-top: 23px;
  margin-left: 23px;
  margin-right: 23px;
`;

export  {Btn,Date,Detail,ImgClass,Container, MainContainer, ImageClass}