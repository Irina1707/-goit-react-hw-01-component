import styled from '@emotion/styled'

export const Stat = styled.section`
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto, sans-serif;
  width: 300px;
  background-color: rgb(209, 217, 219);
  padding: 50px;
`;
export const StatTitle = styled.h2`
background-color: white;
  color: gray;
  padding: 20px;
  text-align: center;
`;
export const StatList = styled.ul`
 list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: blanchedalmond;
`;
export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
 padding: 10px;
`;
export const StatLabel = styled.span`
 font-size: 10px;
  margin-bottom: 5px;
`;