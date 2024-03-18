import React, { useEffect } from "react";
import "./subscriptionscreen.scss";
import Channeldata from "../../components/channeldata/channeldata";
import { useDispatch, useSelector } from "react-redux";
import { getsubscribedchannel } from "../../redux/slice/subscribedchannelSlice";
const Subscriptionscreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getsubscribedchannel());
  }, [dispatch]);
  const { channel, loading } = useSelector((state) => state.subscribedchannel);
  return <div className="main-channelscreen">{!loading && channel.map((data) => <Channeldata data={data} />)}</div>;
};

export default Subscriptionscreen;
