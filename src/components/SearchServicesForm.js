import React from 'react';

import { IconSearch, CompHeading, HeaderSearch } from '@massds/mayflower-react';

const SearchServicesForm = () => (
  <>
    <CompHeading
      color=""
      id=""
      level={2}
      sidebar={false}
      sub={false}
      title="EOTSS Products and Services"
      titleContext=""
    />
    <p>
      Here you will find the most up-to-date technology, product, service
      and security offerings provided directly by the Executive Office of
      Technology Services and Security.
    </p>
    <div style={{ height: '40px' }} />
    <div>
      <HeaderSearch
        buttonSearch={{
          ariaLabel: '',
          icon: (
            <IconSearch
              classes={['']}
              fill="#fffff"
              height={60}
              name="search"
              title="Search"
              width={20}
            />
          ),
          onClick: function noRefCheck() {},
          text: 'Search',
          usage: ''
        }}
        defaultText=""
        id="header-search"
        label="Search terms"
        orgDropdown={{
          dropdownButton: {
            capitalized: true,
            text: 'Categories'
          },
          inputText: {
            boxed: true,
            id: 'category-typeahead',
            keys: ['text'],
            label: null,
            onChange: function noRefCheck() {},
            options: [
              {
                text: 'All Categories',
                value: ''
              },
              {
                text: 'Standard Service Offerings',
                value: 'standard-service-offerings'
              },
              {
                text: 'Desktop Software',
                value: 'desktop-software '
              },
              {
                text: 'Email, Calendar & Collaboration',
                value: 'standard-service-offerings'
              },
              {
                text: 'HR and Provisioning',
                value: 'hr-and-provisioning'
              },
              {
                text: 'Secure Applications and Access',
                value: 'sercure-applications-and-access'
              },
              {
                text: 'Support Services',
                value: 'support-services'
              },
              {
                text: 'Telephone & Mobile Devices',
                value: 'telephone-and-mobile-devices'
              }
            ],
            placeholder: 'Search a service...',
            selected: ''
          }
        }}
        placeholder="Search Services"
      />
    </div>
  </>
);

export default SearchServicesForm;
