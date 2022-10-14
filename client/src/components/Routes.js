import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Bag from '../pages/Bag'
import BuyMedia from '../pages/BuyMedia'
import BuyNow from '../pages/BuyMedia/buynow'
import SelectSite from '../pages/BuyMedia/selectsite'
import SelectTime from '../pages/BuyMedia/selecttime'
import AddToCart from '../pages/BuyMedia/addtocart'
import PayMent from '../pages/BuyMedia/payment'
import OptConFirm from '../pages/BuyMedia/optconfirm'
import OptSuccess from '../pages/BuyMedia/optsuscess'
import SentGift from '../pages/BuyMedia/sentgift'
import Login from '../pages/Login'
import RegisterMember from '../pages/RegisterMember'
import MarketPlace from '../pages/MarketPlace'
import SelectPlace from '../pages/MarketPlace/selectplace'
import SelectPlaceTime from '../pages/MarketPlace/selectplacetime'
import Media from '../pages/Media'
//import NotFoundPage from './pages/NotFoundPage'

import Chat from "../pages/Profile/Chat";
import UploadArtwork from "../pages/Profile/UploadArtwork";
import Profile from "../pages/Profile/Profile";
import MyBooking from "../pages/Profile/MyBooking";
import ReleaseToMarketplace from "../pages/Profile/ReleaseToMarketplace";
import ToUpload from "../pages/Profile/ToUpload";
import UploadArtwork2 from "../pages/Profile/UploadArtwork2";
import UploadStatus1 from "../pages/Profile/UploadStatus1";
import AdsOnAir1 from "../pages/Profile/AdsOnAir1";
import UploadStatus2 from "../pages/Profile/UploadStatus2";
import UploadStatus3 from "../pages/Profile/UploadStatus3";
import ReleaseToMarketplaceDialog from "../pages/Profile/ReleaseToMarketplaceDialog";
import AdsOnAir2 from "../pages/Profile/AdsOnAir2";
import ReleaseToMarketplace2 from "../pages/Profile/ReleaseToMarketplace2";

import MyBooking2 from "../pages/MyBooking";
import UPloadMedia2 from "../pages/MyBooking/uploadmedia";
import ReleaseMarketPlace2 from "../pages/MyBooking/releasemarketplace";

const NotFoundPage = () => { return <h1>Not Found Page</h1> }

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/registermember" element={<RegisterMember />} />
        <Route exact path="/bag" element={<Bag />} />
        <Route exact path="/buymedia" element={<BuyMedia />} />
        <Route exact path="/buynow" element={<BuyNow />} />
        <Route exact path="/selectsite" element={<SelectSite />} />
        <Route exact path="/selecttime" element={<SelectTime />} />
        <Route exact path="/addtocart" element={<AddToCart />} />
        <Route exact path="/payment" element={<PayMent />} />
        <Route exact path="/optconfirm" element={<OptConFirm />} />
        <Route exact path="/optsuscess" element={<OptSuccess />} />
        <Route exact path="/sentgift" element={<SentGift />} />
        <Route exact path="/marketplace" element={<MarketPlace />} />
        <Route exact path="/selectplace" element={<SelectPlace />} />
        <Route exact path="/selectplacetime" element={<SelectPlaceTime />} />
        <Route exact path="/media/:media" element={<Media />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/chat" element={<Chat {...chatData} />} />
        <Route path="/upload-artwork-1" element={<UploadArtwork {...uploadArtworkData} />} />
        <Route path="/profile" element={<Profile {...profileData} />} />
        <Route path="/my-booking" element={<MyBooking {...myBookingData} />} />
        <Route path="/release-to-marketplace" element={<ReleaseToMarketplace {...releaseToMarketplaceData} />} />
        <Route path="/to-upload" element={<ToUpload {...toUploadData} />} />
        <Route path="/upload-artwork" element={<UploadArtwork2 {...uploadArtwork2Data} />} />
        <Route path="/upload-status-1" element={<UploadStatus1 {...uploadStatus1Data} />} />
        <Route path="/ads-on-air-1" element={<AdsOnAir1 {...adsOnAir1Data} />} />
        <Route path="/upload-status-2" element={<UploadStatus2 {...uploadStatus2Data} />} />
        <Route path="/upload-status-3" element={<UploadStatus3 {...uploadStatus3Data} />} />
        <Route path="/release-to-marketplace-dialog" element={<ReleaseToMarketplaceDialog {...releaseToMarketplaceDialogData} />} />
        <Route path="/release-to-marketplace-2" element={<ReleaseToMarketplace2 {...releaseToMarketplace2Data} />} />
        <Route path="/ads-on-air-2" element={<AdsOnAir2 moveCom="move.com"
            parcParagonThe9={
                <React.Fragment>
                    PARC PARAGON + THE 90 <br />
                    DEGREE &amp; INTERCHANGE 21
                </React.Fragment>
            }
            addressChaturathit="Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok"
            text14="30-08-2022 12:00"
            preview="PREVIEW"
            onair="Onair"
            group7842Props={adsOnAir2Data.group7842Props} />} />
        <Route path='/my-booking-2' element={<MyBooking2 />} />
        <Route path='/upload-media-2' element={<UPloadMedia2 />} />
        <Route path='/release-market-place-2' element={<ReleaseMarketPlace2 />} />
    </Routes>
)

const chatData = {
    chat: "CHAT",
    m: "M",
    momeeKlouh: "MOMEE KLOUH",
    text3: "สวัสดีค่ะ อยากได้เพิ่มอีกวันมีไหมคะ",
    text4: "สวัสดีค่ะ",
    date1: "12-04-2022",
    number1: "2",
    price1: "P",
    pimployWee: "Pimploy wee",
    date2: "12-04-2022",
    number2: "2",
    text5: "ได้เลยค่ะ เดี๋ยวติดต่อไป",
    price2: "P",
    jeab: "JEAB",
    date3: "12-04-2022",
    number3: "2",
};

const group77851Data = {
    className: "",
};

const group78421Data = {
    group7785Props: group77851Data,
};

const group79041Data = {
    screenShot20220705At16401: "/img/screen-shot-2022-07-05-at-16-40-1@2x.png",
};

const group79301Data = {
    cancle: "Cancle",
};

const group79192Data = {
    className: "group-7921",
};

const xIcon23Data = {
    className: "x_icon-5",
};

const group79193Data = {
    className: "group-7938",
};

const xIcon24Data = {
    className: "x_icon-6",
};

const group79194Data = {
    className: "group-7939",
};

const xIcon25Data = {
    className: "x_icon-7",
};

const group79195Data = {
    className: "group-7940",
};

const xIcon26Data = {
    className: "x_icon-8",
};

const group79196Data = {
    className: "group-7941",
};

const xIcon27Data = {
    className: "x_icon-9",
};

const uploadArtworkData = {
    moveCom: "move.com",
    parcParagonThe9: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    addressChaturathit: "Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok",
    spanText1: "FORMAT ",
    spanText2: "CUSTOMIZED",
    spanText3: "DETAIL ",
    spanText4: "BOOKING",
    quantity: "Quantity :",
    availablePack: "Available pack :",
    yourArtWorkWill: "(Your art work will be displayed on 4 screens.)",
    number1: "9",
    minLoop: "Min./Loop :",
    x2MinutesPer1AvailablePack: "(2 minutes per 1 Available pack)",
    number2: "2",
    address1: "4 Screen",
    remark: "REMARK",
    loremIpsumIsSimpl: <React.Fragment>Lorem Ipsum is simply dummy text of the printing and <br />industry. Lorem Ipsum has been the industry&#x27;s standard dummy <br />text ever since the 1500s, when an unknown printer took a galley <br />of type and scrambled it to make a type specimen book. It has <br />survived not only five centuries, but also the leap into electronic <br />typesetting, remaining essentially unchanged. It was <br />in</React.Fragment>,
    format: "Format :",
    screenResolution: "Screen resolution :",
    framerate: "FrameRate :",
    address2: "1680 x 816 px",
    address3: "25 frames per second",
    formatAnimation: "Format animation  :",
    aviWmvMovMp41: "Avi / Wmv / Mov /Mp4",
    formatArtWork: "Format art work  :",
    aiPsd: "Ai /Psd",
    aviWmvMovMp42: "Avi / Wmv / Mov / Mp4",
    uploading: "UPLOADING",
    blankScreen: "Blank Screen",
    b: "B",
    maskGroup2: "/img/mask-group@1x.png",
    a: "A",
    maskGroup3: "/img/mask-group-1@1x.png",
    c: "C",
    maskGroup4: "/img/mask-group-2@1x.png",
    d: "D",
    maskGroup5: "/img/mask-group-3@1x.png",
    e: "E",
    maskGroup6: "/img/mask-group-4@1x.png",
    f: "F",
    screenA480X408Px: "Screen A 480 x 408 Px",
    screenC60X408Px: "Screen C 60 x 408 Px",
    screenD600X408Px: "Screen D 600 x 408 Px",
    screenE660X408Px: "Screen E 660 x 408 Px",
    screenF1020X408Px: "Screen F 1020 x 408 Px",
    screenB360X408Px: "Screen B 360 x 408 Px",
    completed1: "Completed",
    completed2: "Completed",
    completed3: "Completed",
    completed4: "Completed",
    completed5: "Completed",
    completed6: "Completed",
    uploadTime: "Upload time",
    youHave5DaysAnd: "You have 5 days and 3 hours left to upload.",
    mockup: "Mockup",
    preview: "Preview",
    group7842Props: group78421Data,
    group7904Props: group79041Data,
    group7930Props: group79301Data,
    group79191Props: group79192Data,
    xIcon21Props: xIcon23Data,
    group79192Props: group79193Data,
    xIcon22Props: xIcon24Data,
    group79193Props: group79194Data,
    xIcon23Props: xIcon25Data,
    group79194Props: group79195Data,
    xIcon24Props: xIcon26Data,
    group79195Props: group79196Data,
    xIcon25Props: xIcon27Data,
};

const group77642Data = {
    className: "group-7764-1",
};

const group77652Data = {
    className: "group-7765-1",
};

const group77662Data = {
    className: "group-7766-1",
};

const group79742Data = {
    className: "group-7974-1",
};

const xIcon4Data = {
    className: "x_icon-3",
};

const profileData = {
    spanText1: "MY ",
    spanText2: "MEDIA",
    myBooking: "My booking",
    toUpload: "To upload",
    myStatus: "My Status",
    adsOnAir: "Ads on air",
    number1: "2",
    number2: "1",
    history: "History",
    myWallet: "MY WALLET",
    myBenefit: "My benefit",
    moveToken: "MOVE Token",
    loremIpsumIsSimpl: <React.Fragment>Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the <br />industry&#x27;s standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and <br />scrambled it to make a type specimen book. It has <br />survived not only five centuries, but also the leap into <br />electronic typesetting, remaining essentially</React.Fragment>,
    phasikaPathomwong: "Phasika Pathomwong",
    carepasikaGmailCom: "carepasika@gmail.com",
    number3: "2",
    myMarketplace: "MY MARKETPLACE",
    number4: "10",
    chat: "CHAT",
    group7764Props: group77642Data,
    group7765Props: group77652Data,
    group7766Props: group77662Data,
    group7974Props: group79742Data,
    xIconProps: xIcon4Data,
};

const group77852Data = {
    className: "group-7785-1",
};

const group78422Data = {
    className: "group-7842-1",
    group7785Props: group77852Data,
};

const group78321Data = {
    address: "4 Screen",
};

const group78341Data = {
    number: "9",
};

const group78331Data = {
    number: "2",
};

const frame78271Data = {
    group7832Props: group78321Data,
    group7834Props: group78341Data,
    group7833Props: group78331Data,
};

const group79302Data = {
    cancle: "RELEASE TO MARKETPLACE",
    className: "group-7989",
};

const group79303Data = {
    cancle: "RELEASE TO MARKETPLACE",
    className: "group-7990",
};

const group78322Data = {
    address: "3 Screen",
    className: "group-7832-1",
};

const group78342Data = {
    number: "5",
    className: "group-7834-1",
};

const group78332Data = {
    number: "3",
    className: "group-7833-1",
};

const frame78251Data = {
    group7832Props: group78322Data,
    group7834Props: group78342Data,
    group7833Props: group78332Data,
};

const group78022Data = {
    className: "group-7802-1",
};

const myBookingData = {
    moveCom: "move.com",
    type1ParcParagon: <React.Fragment>TYPE 1 PARC PARAGON+90 DEGREE+<br />ROOFTOP &amp; INTERCHANGE 21</React.Fragment>,
    huaiKhwangBangkok1: "Huai Khwang, Bangkok",
    bookingDate1: "Booking date",
    place1: "START",
    date1: "12-06-2022",
    end1: "END",
    date2: "17-06-2022",
    bookingDate2: "Booking date",
    place2: "START",
    date3: "12-06-2022",
    end2: "END",
    date4: "17-06-2022",
    type2ParcParagon: <React.Fragment>TYPE 2 PARC PARAGON + 90 DEGREE + <br />ROOFTOP</React.Fragment>,
    huaiKhwangBangkok2: "Huai Khwang, Bangkok",
    arrowLeftLine: "/img/arrow-left-line@2x.png",
    spanText1: "MY ",
    spanText2: "BOOKING",
    group7842Props: group78422Data,
    frame7827Props: frame78271Data,
    group79301Props: group79302Data,
    group79302Props: group79303Data,
    frame7825Props: frame78251Data,
    group7802Props: group78022Data,
};

const releaseToMarketplaceData = {
    removeFromMarketplace: "Remove from marketplace",
    dateToSell: "Date to sell",
    period: "Period",
    totalPrice: "Total Price",
    price: "60,000 THB",
    location: "Location",
    showDc: "Show DC",
    name: "May 6,2022 - May 12,2022",
    number: "6",
    surname: "Day",
    confirm: "CONFIRM",
    cancle: "CANCLE",
};

const group77853Data = {
    className: "group-7785-2",
};

const group78423Data = {
    className: "group-7842-2",
    group7785Props: group77853Data,
};

const group78323Data = {
    address: "4 Screen",
};

const group78343Data = {
    number: "9",
};

const group78333Data = {
    number: "2",
};

const frame78272Data = {
    group7832Props: group78323Data,
    group7834Props: group78343Data,
    group7833Props: group78333Data,
};

const group78324Data = {
    address: "3 Screen",
    className: "group-7832-3",
};

const group78344Data = {
    number: "5",
    className: "group-7834-3",
};

const group78334Data = {
    number: "3",
    className: "group-7833-3",
};

const frame78252Data = {
    className: "frame-7825-1",
    group7832Props: group78324Data,
    group7834Props: group78344Data,
    group7833Props: group78334Data,
};

const group78023Data = {
    className: "group-7802-2",
};

const toUploadData = {
    moveCom: "move.com",
    type1ParcParagon: <React.Fragment>TYPE 1 PARC PARAGON+90 DEGREE+<br />ROOFTOP &amp; INTERCHANGE 21</React.Fragment>,
    huaiKhwangBangkok1: "Huai Khwang, Bangkok",
    bookingDate1: "Booking date",
    place1: "START",
    date1: "12-06-2022",
    end1: "END",
    date2: "17-06-2022",
    uploadMedia1: "UPLOAD MEDIA",
    bookingDate2: "Booking date",
    place2: "START",
    date3: "12-06-2022",
    end2: "END",
    date4: "17-06-2022",
    type2ParcParagon: <React.Fragment>TYPE 2 PARC PARAGON + 90 DEGREE + <br />ROOFTOP</React.Fragment>,
    huaiKhwangBangkok2: "Huai Khwang, Bangkok",
    arrowLeftLine: "/img/arrow-left-line@2x.png",
    spanText1: "TO ",
    spanText2: "UPLOAD",
    uploadMedia2: "UPLOAD MEDIA",
    group7842Props: group78423Data,
    frame7827Props: frame78272Data,
    frame7825Props: frame78252Data,
    group7802Props: group78023Data,
};

const group77825Data = {
    className: "group-7782-4",
};

const group78325Data = {
    address: "4 Screen",
};

const group78345Data = {
    number: "9",
};

const group78335Data = {
    number: "2",
};

const frame78273Data = {
    className: "frame-7827-2",
    group7832Props: group78325Data,
    group7834Props: group78345Data,
    group7833Props: group78335Data,
};

const group78326Data = {
    address: "3 Screen",
    className: "group-7832-5",
};

const group78346Data = {
    number: "5",
    className: "group-7834-5",
};

const group78336Data = {
    number: "3",
    className: "group-7833-5",
};

const frame78253Data = {
    className: "frame-7825-2",
    group7832Props: group78326Data,
    group7834Props: group78346Data,
    group7833Props: group78336Data,
};

const group77854Data = {
    className: "group-7785-3",
};

const group7962Data = {
    price: "P",
    phasika: "Phasika",
    group7785Props: group77854Data,
};

const group78024Data = {
    className: "group-7802-3",
};

const uploadArtwork2Data = {
    moveCom: "move.com",
    spanText1: "MY",
    spanText2: " MARKETPLACE",
    type1ParcParagon: <React.Fragment>TYPE 1 PARC PARAGON+90 DEGREE+<br />ROOFTOP &amp; INTERCHANGE 21</React.Fragment>,
    huaiKhwangBangkok1: "Huai Khwang, Bangkok",
    bookingDate1: "Booking date",
    place1: "START",
    date1: "12-06-2022",
    end1: "END",
    date2: "17-06-2022",
    removeFromMarketplace: "REMOVE FROM MARKETPLACE",
    uploadMedia: "UPLOAD MEDIA",
    bookingDate2: "Booking date",
    place2: "START",
    date3: "12-06-2022",
    end2: "END",
    date4: "17-06-2022",
    type2ParcParagon: <React.Fragment>TYPE 2 PARC PARAGON + 90 DEGREE + <br />ROOFTOP</React.Fragment>,
    huaiKhwangBangkok2: "Huai Khwang, Bangkok",
    group7782Props: group77825Data,
    frame7827Props: frame78273Data,
    frame7825Props: frame78253Data,
    group7962Props: group7962Data,
    group7802Props: group78024Data,
};

const group77855Data = {
    className: "group-7785-4",
};

const group78424Data = {
    className: "group-7842-3",
    group7785Props: group77855Data,
};

const group79442Data = {
    className: "group-794-2",
};

const group79443Data = {
    className: "group-794",
};

const xIcon28Data = {
    className: "x_icon-10",
};

const group78025Data = {
    className: "group-7802-4",
};

const uploadStatus1Data = {
    moveCom: "move.com",
    location1: "Location",
    bookingDate1: "Booking Date",
    parcParagonThe91: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name1: "May 6,2022 - May 12,2022",
    march620221: "March 6,2022",
    uplodeDate1: "Uplode Date",
    status1: "Status",
    location2: "Location",
    bookingDate2: "Booking Date",
    parcParagonThe92: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name2: "May 6,2022 - May 12,2022",
    march620222: "March 6,2022",
    uplodeDate2: "Uplode Date",
    status2: "Status",
    location3: "Location",
    bookingDate3: "Booking Date",
    parcParagonThe93: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name3: "May 6,2022 - May 12,2022",
    march620223: "March 6,2022",
    uplodeDate3: "Uplode Date",
    status3: "Status",
    approved: "Approved",
    location4: "Location",
    bookingDate4: "Booking Date",
    parcParagonThe94: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name4: "May 6,2022 - May 12,2022",
    march620224: "March 6,2022",
    uplodeDate4: "Uplode Date",
    status4: "Status",
    checking1: "Checking",
    checking2: "Checking",
    rejected: "Rejected",
    invalidCategory: "Invalid category",
    pleaseReUpload: "Please re-upload.",
    spanText1: "MY ",
    spanText2: "STATUS",
    group7842Props: group78424Data,
    group79441Props: group79442Data,
    group79442Props: group79443Data,
    xIcon2Props: xIcon28Data,
    group7802Props: group78025Data,
};

const group77856Data = {
    className: "",
};

const group78425Data = {
    className: "group-7842-4",
    group7785Props: group77856Data,
};

const adsOnAir1Data = {
    moveCom: "move.com",
    spanText1: "MY ",
    spanText2: "STATUS",
    checkYourMediaUploadStatusHere: "Check your media upload status here.",
    location1: "Location",
    bookingDate1: "Booking Date",
    parcParagonThe91: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name1: "May 6,2022 - May 12,2022",
    march620221: "March 6,2022",
    uplodeDate1: "Uplode Date",
    status1: "Status",
    onair1: "Onair",
    onair2: "Onair",
    location2: "Location",
    bookingDate2: "Booking Date",
    parcParagonThe92: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name2: "May 6,2022 - May 12,2022",
    march620222: "March 6,2022",
    uplodeDate2: "Uplode Date",
    status2: "Status",
    location3: "Location",
    bookingDate3: "Booking Date",
    parcParagonThe93: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    name3: "May 6,2022 - May 12,2022",
    march620223: "March 6,2022",
    uplodeDate3: "Uplode Date",
    status3: "Status",
    group7842Props: group78425Data
};

const group77857Data = {
    className: "group-7785-6",
};

const group78426Data = {
    group7785Props: group77857Data,
};

const group79444Data = {
    className: "group-7946",
};

const group78026Data = {
    className: "group-7802-5",
};

const uploadStatus2Data = {
    moveCom: "move.com",
    parcParagonThe9: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    addressChaturathit: "Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok",
    checking: "Checking",
    text12: "30-08-2022 12:00",
    preview: "PREVIEW",
    group7842Props: group78426Data,
    group7944Props: group79444Data,
    group7802Props: group78026Data,
};

const group77829Data = {
    className: "group-7782-8",
};

const group77858Data = {
    className: "group-7785-7",
};

const group78427Data = {
    group7785Props: group77858Data,
};

const tick2Data = {
    className: "tick-1",
};

const group78027Data = {
    className: "group-7802-6",
};

const uploadStatus3Data = {
    moveCom: "move.com",
    parcParagonThe9: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    addressChaturathit: "Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok",
    text13: "30-08-2022 12:00",
    preview: "PREVIEW",
    bookingDate: "Booking Date :",
    place: "START",
    date1: "12-06-2022",
    end: "END",
    date2: "17-06-2022",
    march62022: "March 6,2022",
    uplodeDate: "Uplode Date :",
    quantity: "Quantity :",
    availablePack: "Available pack :",
    yourArtWorkWill: "(Your art work will be displayed on 4 screens.)",
    number: "9",
    minLoop: "Min./Loop :",
    x2MinutesPer1AvailablePack: "(2 minutes per 1 Available pack)",
    address: "4 Screen",
    approved: "Approved",
    group7782Props: group77829Data,
    group7842Props: group78427Data,
    tickProps: tick2Data,
    group7802Props: group78027Data,
};

const releaseToMarketplaceDialogData = {
    releaseToMarketplace: "Release to marketplace",
    dateToSell: "Date to sell",
    period: "Period",
    totalPrice: "Total Price",
    price: "60,000 THB",
    location: "Location",
    showDc: "Show DC",
    name: "May 6,2022 - May 12,2022",
    number: "6",
    surname: "Day",
    confirm: "CONFIRM",
    cancle: "CANCLE",
};

const group77859Data = {
    className: "",
};

const group78428Data = {
    group7785Props: group77859Data,
};

const adsOnAir2Data = {
    moveCom: "move.com",
    parcParagonThe9: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    addressChaturathit: "Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok",
    text14: "30-08-2022 12:00",
    preview: "PREVIEW",
    onair: "Onair",
    group7842Props: group78428Data,
};

const group778510Data = {
    className: "group-7785-9",
};

const group78429Data = {
    className: "group-7842-8",
    group7785Props: group778510Data,
};

const group79042Data = {
    screenShot20220705At16401: "/img/screen-shot-2022-07-05-at-16-40-1-1@2x.png",
    className: "group-7904-1",
};

const group78028Data = {
    className: "group-7802-7",
};

const releaseToMarketplace2Data = {
    moveCom: "move.com",
    parcParagonThe9: <React.Fragment>PARC PARAGON + THE 90 <br />DEGREE &amp; INTERCHANGE 21</React.Fragment>,
    addressChaturathit: "Address: Chaturathit Rd, Bang Kapi, Huai Khwang, Bangkok",
    spanText1: "FORMAT ",
    spanText2: "CUSTOMIZED",
    spanText3: "DETAIL ",
    spanText4: "BOOKING",
    spanText5: "SET DATE ",
    spanText6: "TO SELL",
    spanText7: "SET",
    spanText8: " PRICE",
    quantity: "Quantity :",
    availablePack: "Available pack :",
    yourArtWorkWill: "(Your art work will be displayed on 4 screens.)",
    number1: "9",
    minLoop: "Min./Loop :",
    x2MinutesPer1AvailablePack: "(2 minutes per 1 Available pack)",
    number2: "2",
    address: "4 Screen",
    bookingDate: "Booking date",
    place: "START",
    date1: "12-06-2022",
    end: "END",
    date2: "17-06-2022",
    date3: "12-06-2022",
    date4: "17-06-2022",
    currentPrice: "Current Price",
    price: "THB",
    text16: "50,000",
    text17: "1.000 (10%)",
    platformFeeIsSold: "Platform fee is sold",
    releaseToMarketplace: "RELEASE TO MARKETPLACE",
    cancle: "CANCLE",
    group7842Props: group78429Data,
    group7904Props: group79042Data,
    group7802Props: group78028Data,
};