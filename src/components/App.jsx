import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
    
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
 </div>
  );
  
    
      
    
  
};
