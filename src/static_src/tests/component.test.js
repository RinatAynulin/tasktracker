import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {ProjectHeader} from '../components/project_header/ProjectHeader';

describe('<ProjectHeader />', () => {
   it('Renders Header', () => {
      const currentUser = {};  
      const component = ReactTestUtils.renderIntoDocument(
          <ProjectHeader currentUser={currentUser}/>
      );
      const main = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'a'
      );

      console.log(main.textContent);
      expect(main.textContent).toBe("  ");
   });
});
