import styled from "styled-components";
import { useTodo } from "../hooks/TodoContext";

//#region styled-components
const Wrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #6b80c2;
  padding-right: 5px;
`;

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 42px;
  height: 22px;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 2px;
    background-color: #d1cfff;
    transition: 0.2s;
  }
`;

// 客製化
const ToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  &:checked + ${ToggleLabel} {
    background-color: #d1cfff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      background-color: #fff;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;
//#endregion styled-components

export default function Sort() {
 
  
  const { sort, setSort } = useTodo();
  const handleSort = () => {
    // 點擊按鈕改變 sort 的布林值，以決定是否將完成的任務置底
    setSort(!sort);
  };
  return (
    <Wrapper>
      <div>Move done things to end?</div>
      <ToggleWrapper>
        <ToggleInput id="toggle" type="checkbox" onChange={handleSort}/>
        <ToggleLabel htmlFor="toggle" />
      </ToggleWrapper>
    </Wrapper>
  );
}
