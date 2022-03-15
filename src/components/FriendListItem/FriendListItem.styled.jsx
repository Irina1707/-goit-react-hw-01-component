import styled from '@emotion/styled';

export const FriendItem = styled.li`
 margin-left: auto;
  margin-right: auto;
  display: block;
  border: 1px solid gray;
  border-radius: 3px;
  width: 300px;
  padding: 50px;
  box-shadow: 5px 5px 10px gray;
  margin-bottom: 20px;
`;

const setColor = (props) => {
        switch (props.isOnline) {
            case true:
                return 'green';
            case false:
                return ' red';
            default:
                return 'blue'
        }
}
    
export const Status = styled.span`
 display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;

  background-color: ${setColor};
`;

export const FriendName = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 26px;
  font-weight: 700px;
  display: inline-block;
  vertical-align: middle;
`;
export const FriendAvatar = styled.img`
display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
`;