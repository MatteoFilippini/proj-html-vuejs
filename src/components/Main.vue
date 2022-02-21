<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <section id="culture">
            <div class="card border border-0 w-100">
              <div class="row justify-content-center flex-row-reverse">
                <div class="col-6">
                  <img
                    src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-6">
                  <div class="card-body p-3" style="max-width: 300px">
                    <p>everythins in maxchoach</p>
                    <h2 class="card-title">
                      Learn about our work culture at maxcoach
                    </h2>
                    <div class="card-text">
                      Spend some time to visit out website or head office and
                      discover our current courses, enrollment procedure, and
                      registration deadline. We're opening new classes every
                      beginning of each month.
                    </div>
                    <div class="card-text mt-3">
                      <small class="text-muted"
                        >Have questions? Get Free Guide</small
                      >
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
                <div class="col-6">
                  <img
                    src="../assets/img/stock-full-hd-11-670x450.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-6">
                  <div class="card-body" style="max-width: 300px">
                    <p>how we work</p>
                    <h2 class="card-title">
                      Upgrade your skills upgrade your life
                    </h2>
                    <div class="card-text">
                      Opening up more opportunities in front of you to get the
                      ticket to more enjoyable door in life. Getting equipment
                      with new skills for new sets of insights into carrer.
                      MaxCoach accompany learners in every stage of learning.
                    </div>
                    <div class="card-text mt-3">
                      <small class="text-muted">Download free guidebook</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <section id="slider">
            <div class="slider-text text-center mb-5">
              <p>join maxcoach as best</p>
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
    </div>
  </main>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  name: "Main",
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
p {
  text-transform: uppercase;
  font-size: 12px;
}
#culture {
  margin: 100px 0;
  h2 {
    font-weight: 600;
  }
  img {
    width: 100%;
  }
  .stats {
    display: flex;
    justify-content: space-around;
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
</style>