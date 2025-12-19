/**
 * Google Analytics 4 Event Tracking Utility
 * Tracks user interactions throughout the site for conversion analysis
 */

// GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-L03F985VF0';

/**
 * Check if GA4 is loaded
 */
export const isGA4Loaded = () => {
  return typeof window !== 'undefined' && window.gtag;
};

/**
 * Track custom events in GA4
 * @param {string} eventName - Event name (e.g., 'form_submit', 'phone_click')
 * @param {object} eventParams - Additional event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (isGA4Loaded()) {
    window.gtag('event', eventName, eventParams);
  } else {
    // Fallback: queue events if GA4 not loaded yet
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  }
};

/**
 * Track phone number clicks
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} location - Where the click occurred (e.g., 'header', 'footer', 'contact_page')
 */
export const trackPhoneClick = (phoneNumber, location = 'unknown') => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    location: location,
    event_category: 'engagement',
    event_label: `Phone: ${phoneNumber} - ${location}`,
  });
};

/**
 * Track email clicks
 * @param {string} email - Email address clicked
 * @param {string} location - Where the click occurred
 */
export const trackEmailClick = (email, location = 'unknown') => {
  trackEvent('email_click', {
    email: email,
    location: location,
    event_category: 'engagement',
    event_label: `Email: ${email} - ${location}`,
  });
};

/**
 * Track form submissions
 * @param {string} formName - Name/type of form (e.g., 'contact', 'valuation')
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmit = (formName, success = true) => {
  trackEvent(success ? 'form_submit' : 'form_submit_error', {
    form_name: formName,
    event_category: 'conversion',
    event_label: `${formName} form - ${success ? 'success' : 'error'}`,
    value: success ? 1 : 0,
  });
};

/**
 * Track CTA button clicks
 * @param {string} ctaText - Text of the CTA button
 * @param {string} location - Where the CTA is located
 */
export const trackCTAClick = (ctaText, location = 'unknown') => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    location: location,
    event_category: 'engagement',
    event_label: `CTA: ${ctaText} - ${location}`,
  });
};

/**
 * Track listing views/clicks (for RealScout listings)
 * @param {string} listingAddress - Address of the listing
 * @param {string} listingPrice - Price of the listing
 */
export const trackListingClick = (listingAddress, listingPrice) => {
  trackEvent('listing_click', {
    listing_address: listingAddress,
    listing_price: listingPrice,
    event_category: 'engagement',
    event_label: `Listing: ${listingAddress}`,
  });
};

/**
 * Track outbound link clicks
 * @param {string} url - URL being clicked
 * @param {string} linkText - Text of the link
 */
export const trackOutboundLink = (url, linkText = '') => {
  trackEvent('outbound_link_click', {
    url: url,
    link_text: linkText,
    event_category: 'outbound',
    event_label: linkText || url,
  });
};

