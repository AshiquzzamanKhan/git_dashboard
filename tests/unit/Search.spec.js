import Vue from "vue";
import Vuetify from "vuetify";

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "@/components/Search.vue";

Vue.use(Vuetify);

describe("Search.vue Component", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders search bar", () => {
    const wrapper = shallowMount(Search, {
      localVue,
      vuetify,
    });

    const title = wrapper.find("span");

    expect(title.text()).toBe("mdi-githubhttps://github.com/");
  });

  it("clicks handles", () => {
    const wrapper = shallowMount(Search, {
      localVue,
      vuetify,
    });
  });
});
