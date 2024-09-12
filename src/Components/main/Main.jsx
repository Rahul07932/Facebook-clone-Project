import React from 'react'
import './Main.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import virat from './virat.jpeg';
import one from './1.png';
import Dhoni from'./Dhoni.jpeg';
import Rohit from './Rohit.jpeg';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
class Main extends React.Component{
    render(){
        return(
            <div>
            <div className="Topbarwrapper">
            <h1 className='logo'>facebook</h1>
            <div className="Search">
            <SearchIcon/> 
            </div> 
    
            <input className="Searchbar" type="text" placeholder="Search facebook"></input>  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
            <h5> HomePage</h5> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <h5>Timeline</h5> &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="righticons">
            <PersonIcon/> &nbsp; &nbsp;
            <ChatBubbleIcon/> &nbsp; &nbsp;
            <NotificationsIcon/> &nbsp; &nbsp;
            <img src={virat}></img>
            <img src={one} className='one'></img>
            <img src={one} className='two'></img>
            <img src={one} className='three'></img>
            </div>
            </div>
            <div className='sidebar'>
                <div className="sidecontain">
                <RssFeedIcon/><h6>Feed</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <ChatIcon/><h6>Chats</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <OndemandVideoIcon/><h6>Videos</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <GroupsIcon/><h6>Groups</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <BookmarkIcon/><h6>Bookmarks</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <HelpOutlineIcon/><h6>Questions</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <WorkOutlineIcon/><h6>Jobs</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <EventIcon/><h6>Events</h6><br/> <br/>
            </div> <br/>
            <div className="sidecontain">
            <SchoolIcon/><h6>Courses</h6><br/> <br/>
            </div> <br/>
            <button >Show More</button><br/> <br/>
            <div className="line">    
            </div><br/> <br/>
            <div className="sidecontain">
            <img src={Rohit}className="img1"></img><h6>Rohit Sharma</h6>
            </div> <br/> 
            <div className="sidecontain">
            <img src={Dhoni} className="img1"></img><h6>Ms Dhoni</h6>
            </div><br/> <br/>
            </div>
            <div className="midcontain">
            <img  className="img2"src={virat}></img>
            <input type="text" placeholder="Whats in your mind Kohli?" className='input1'></input>
            <div className='midvalues'>
            <div className='photos'>
            <AddToPhotosIcon/>
            <h4>Photos/Videos</h4>
            </div>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            <div className='photos1'>
            <LocalOfferIcon/>
            <h4>Tags</h4> 
            </div>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            <div className='photos2'>
            <LocationOnIcon/>
            <h4>Location</h4>
            </div>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            <div className='photos3'>
            <SentimentSatisfiedIcon/>
            <h4>Feelings</h4>
            </div>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="button2">Share</button>
            </div>
            </div>
            <div className='mid'>
            <div className=" Dhonicontain">
            <img src={Dhoni} className="img1"></img> &nbsp;&nbsp;<p className='p1'><b>Ms Dhoni</b></p> &nbsp; &nbsp;
            <p className='p1'>5 min ago</p> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
            <MoreVertOutlinedIcon/> 
            </div> &nbsp;
           
            </div>
    
           <br/> <br/>
           <div>
            <p className='par'><b>There are no shortcuts to any place Worth going.</b></p>
            <br/>
            <div className='food'>
                </div>

            </div>
            <div className="rightbar">
                <CardGiftcardOutlinedIcon/> &nbsp;
                <p className="p2"><b>Ms Dhoni and 2 more friends</b> have birthday today</p> 
                <br/>
    
                <br/> <br/>
                <div className='mcdonald'>

                </div>
             
            </div>
            </div>


        
    

        )
    }
}
export default Main;
