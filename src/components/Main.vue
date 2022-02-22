<template>
  <main>
    <div class="container">
      <!-- CULTURE -->
      <div class="row">
        <div class="col">
          <section class="culture">
            <div class="card border border-0 w-100">
              <div class="row justify-content-center flex-row-reverse">
                <div class="col">
                  <figure class="m-0">
                    <img
                      src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </figure>
                </div>
                <div class="col">
                  <div class="card-body p-3" style="width: 300px">
                    <p>everythins in <span>MaxChoach</span></p>
                    <h2 class="card-title">
                      Learn about our <span> Work Culture</span> at maxcoach
                    </h2>
                    <div class="card-text">
                      Spend some time to visit out website or head office and
                      discover our current courses, enrollment procedure, and
                      registration deadline. We're opening new classes every
                      beginning of each month.
                    </div>
                    <div class="card-text mt-3">
                      <small
                        >Have questions?
                        <span
                          >Get Free Guide
                          <i class="fa-solid fa-arrow-right-long"></i
                        ></span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stats">
              <div class="stat text-center">
                <span>129+</span>
                <p>enrolled learned</p>
              </div>
              <div class="stat text-center">
                <span>80</span>
                <p>finished session</p>
              </div>
              <div class="stat text-center">
                <span>4%</span>
                <p>satisfatcion rate</p>
              </div>
            </div>
            <div class="card border border-0 w-100">
              <div class="row justify-content-center">
                <div class="col">
                  <figure class="m-0" style="position: relative">
                    <img
                      src="../assets/img/stock-full-hd-11-670x450.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                    <img
                      src="../assets/img/icon-youtube-play.png"
                      alt=""
                      id="ytIcon"
                    />
                  </figure>
                </div>
                <div class="col">
                  <div class="card-body p-3" style="max-width: 300px">
                    <p>how we work</p>
                    <h2 class="card-title">
                      Upgrade Your Skills <span>Upgrade Your Life</span>
                    </h2>
                    <div class="card-text">
                      Opening up more opportunities in front of you to get the
                      ticket to more enjoyable door in life. Gettin gequipped
                      with new skills for new sets of insights into your career.
                      MaxCoach accompany learners in every stage of learning.
                    </div>
                    <div class="card-text mt-3">
                      <small style="color: black"
                        >Download free guidebook
                        <i class="fa-solid fa-arrow-right-long"></i
                      ></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- SLIDER -->
      <div class="row">
        <div class="col">
          <section id="slider">
            <div class="slider-text text-center mb-5">
              <p>join maxcoach at best</p>
              <h2>Latest Online Courses</h2>
            </div>
            <Slider />
            <div class="slider-desc text-center">
              Control your personal preference settings to get notified about
              apporpriate courses. <span>View all courses</span>
            </div>
          </section>
        </div>
      </div>
      <!-- CULTURE -->
      <div class="row">
        <div class="col">
          <section class="culture">
            <div class="card border border-0 w-100">
              <div class="row justify-content-center flex-row-reverse">
                <div class="col">
                  <figure class="m-0">
                    <img
                      src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </figure>
                </div>
                <div class="col">
                  <div class="card-body p-3" style="width: 300px">
                    <p>testimonial</p>
                    <h2 class="card-title">
                      Why do people <span> *Hearts*</span> Us?
                    </h2>
                    <div class="card-text">
                      Seeking for verbals of our service quality? Find them
                      here. Everything is transparent and straightforward for
                      your sense of justification.
                    </div>
                    <div class="card-text mt-3">
                      <small style="color: black"
                        >View all <i class="fa-solid fa-arrow-right-long"></i
                      ></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border border-0 w-100" style="margin: 100px 0">
              <div class="row justify-content-center">
                <div class="col">
                  <figure class="m-0" style="position: relative">
                    <img
                      src="../assets/img/home-3-team-image-300x278.png"
                      class="img-fluid rounded-start"
                      alt="..."
                      style="width: auto"
                    />
                  </figure>
                </div>
                <div class="col">
                  <div class="card-body p-3" style="max-width: 300px">
                    <p>everythins in <span>MaxChoach</span></p>
                    <h2 class="card-title">
                      We're Here To <span>Transform</span> You!
                    </h2>
                    <div class="card-text">
                      As learners, people can enjoy great companionship from
                      MaxCoach mentors and educators. We can help you develop
                      and grow at your best.
                    </div>
                    <div class="card-text mt-3">
                      <Bottone testo="Gee free Guide" />
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- BLOG -->
      <div class="row">
        <div class="col">
          <section id="blog">
            <div class="blogTitle text-center">
              <p>read for more joyment</p>
              <h2>Latest From <span>Our Blog</span></h2>
            </div>
            <div class="blogCards d-flex justify-content-between mt-5">
              <CardBlog
                v-for="(card, index) in cardsBlog"
                :key="index"
                :card="card"
              />
            </div>
          </section>
        </div>
      </div>
      <!-- SUBSCRIBE -->
      <div class="row">
        <div class="col">
          <section id="subscribe" class="text-center" style="margin: 50px 0">
            <h2>Subscribe <span>Newsletters</span></h2>
            <div class="m-4 newsText">
              Enter your email address to register to our newsletter
              subscription deliveredon a regular basis!
            </div>
            <div class="input-group justify-content-center">
              <input
                type="text"
                placeholder="Enter your email"
                aria-describedby="button-addon2"
                style="width: 500px"
                class="border-0 bg-light p-2"
              />
              <Bottone testo="Subscribe" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Slider from "./Slider.vue";
import Bottone from "./Bottone.vue";
import CardBlog from "./CardBlog.vue";
export default {
  name: "Main",
  components: {
    Slider,
    Bottone,
    CardBlog,
  },
  props: ["cardsBlog"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/-var.scss";
p {
  text-transform: uppercase;
  font-size: 12px;
  color: $delta;
  font-weight: 500;
  span {
    color: $stormDust;
  }
}

h2 {
  font-weight: 600;
  span {
    color: $mountainMeadow;
    font-weight: 100;
  }
}

.culture {
  margin: 100px 0;

  img {
    width: 100%;
    height: 400px;
  }
  .stats {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    .stat {
      font-size: 50px;
      font-weight: 600;
      color: $mountainMeadow;
      p {
        color: $stormDust;
      }
    }
  }
  .card-text {
    color: $delta;
    font-size: 14px;
  }
  #ytIcon {
    height: 40px;
    width: 55px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

#slider {
  background-color: lightgray;
  .slider-desc {
    margin: 0 auto;
    width: 600px;
    font-size: 1.3rem;
    font-weight: 500;
    color: gray;
    span {
      color: black;
    }
  }
}

.newsText {
  font-weight: 500;
  color: $stormDust;
}
</style>