import styled from '@emotion/styled';

export const ProfileCard = styled.div`
padding: 0;
  margin: 0;
 margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-family: Roboto, sans-serif;
  width: 300px;
  background-color: rgb(209, 217, 219);
  padding: 50px;
}
`;
export const Description = styled.div`
 background-color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 2px darkgray;
`
export const Name = styled.p`
 font-size: 18px;
  font-weight: 900;
  margin-bottom: 5px;
`
export const Tag = styled.p`
   color: gray;
  margin-bottom: 5px;
`
export const Location = styled.p`
 color: gray;
`
export const Stats = styled.ul`
  background-color: blanchedalmond;
  list-style: none;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  border: 1px gray;
`
export const Item = styled.li`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Label = styled.span`
 color: gray;
  font-size: 12px;
  justify-content: center;
  margin-bottom: 5px;
`
export const Quantity = styled.span`
font-weight: 700;
  justify-content: center;
`