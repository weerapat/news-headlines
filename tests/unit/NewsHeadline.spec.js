import { shallowMount } from '@vue/test-utils';
import NewsHeadline from '@/components/NewsHeadline.vue';

describe('NewsHeadline.vue', () => {
  it('renders props.newsHeadline when passed', () => {
    const newsHeadline = {
      title: 'Iusto neque numquam provident',
      description: 'Lorem ipsum dolor sit amet, Animi autem debitis dolores fuga hic in laboriosam m',
    };
    const wrapper = shallowMount(NewsHeadline, {
      propsData: { newsHeadline },
    });

    expect(wrapper.text()).toMatch(newsHeadline.title);
  });
});
