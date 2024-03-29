import React from "react";
import Roundedbtn from "../Ui/Roundedbtn";
import module from './Picks.module.css'
const Picks = () => {
  return (
    <>
      <div className={module.picks}>
        <h5>Staff Picks</h5>
        <div className={module.pick}>
          <h6>
            {" "}
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>{" "}
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <div className={module.pick}>
          <h6>
            {" "}
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>{" "}
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <div className={module.pick}>
          <h6>
            {" "}
            <span>
              <img
                src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
              />
            </span>{" "}
            Molly Ruby in Towards Data Science
          </h6>
          <h5>
            How ChatGPT Works: The Models Behind The Bot sklhfiu eauh ibffk fg
          </h5>
        </div>
        <h6 className={module.full_list}>See full List</h6>
      </div>

      {/* recommandations */}
      <div className="recomands">
        <div className={`${module.categories_links}`}>
          <h4>Discover more of what matters to you</h4>
          <div className={`${module.links}`}>
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Programming"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Data Science"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Technology"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="9vw"
              inRound="Self Improvement"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Writing"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="8vw"
              inRound="Relationships"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="10vw"
              inRound="Machine Learning"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Productivity"
              color="grey"
              border="1px solid #cecece"
            />
            <Roundedbtn
              borderRadius="2px"
              bgColor="white"
              width="7vw"
              inRound="Politics"
              color="grey"
              border="1px solid #cecece"
            />
          </div>
          <br />
          <hr />
          <div className={`${module.options}`}>
            <h5>Help</h5>
            <h5>Status</h5>
            <h5>Writers</h5>
            <h5>Blog</h5>
            <h5>Careers</h5>
            <h5>Privacy</h5>
            <h5>Terms</h5>
            <h5>About</h5>
            <h5>Text to speech</h5>
          </div>
        </div>
      </div>

      <div className={module.follow_recomand}>
        <h4>Who to follow</h4>
        <div className={module.rec_card}>
          <img
            src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div className="desc">
            <h4>Alvin One</h4>
            <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
          </div>
          <button className={`${module.new_list_btn} ${module.follow_btn}`}>
            follow
          </button>
        </div>
        <div className={module.rec_card}>
          <img
            src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div className="desc">
            <h4>Alvin One</h4>
            <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
          </div>
          <button className={`${module.new_list_btn} ${module.follow_btn}`}>
            follow
          </button>
        </div>
        <div className={module.rec_card}>
          <img
            src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div className="desc">
            <h4>Alvin One</h4>
            <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
          </div>
          <button className={`${module.new_list_btn} ${module.follow_btn}`}>
            follow
          </button>
        </div>
        <div className={module.rec_card}>
          <img
            src="https://images.unsplash.com/photo-1676918555344-e8e8f9ba410d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div className="desc">
            <h4>Alvin One</h4>
            <h6>Lorem ipsum dolor, sit amet consectt, quisquam.</h6>
          </div>
          <button className={`${module.new_list_btn} ${module.follow_btn}`}>
            follow
          </button>
        </div>
      </div>
    </>
  );
};

export default Picks;
