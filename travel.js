// Add memories to notes (paragraphs), sights (a list), and photos ({ src, alt, caption }).
// Regional and country destinations use representative coordinates, not specific cities.
const travelPlaces = [
  { id: 'new-york', name: 'New York', location: 'United States', region: 'america', lat: 40.71, lon: -74.01, notes: [], sights: [], photos: [{ src: 'assets/travel/img_5668.jpg', alt: 'Sunset between buildings on a busy New York street', comment: 'Manhattanhenge on 50th Street, New York, NY (2025)' }, { src: 'assets/travel/img_8214.jpg', hdrSrc: 'assets/travel/img_8214-hdr.jpg', alt: 'A small bird perched on a park chair', comment: 'A Sparrow of Bryant Park, New York, NY (2024)' }] },
  { id: 'san-diego', name: 'San Diego', location: 'United States', region: 'america', lat: 32.72, lon: -117.16, notes: [], sights: [], photos: [] },
  { id: 'los-angeles', name: 'Los Angeles', location: 'California, United States', region: 'america', lat: 34.05, lon: -118.24, notes: [], sights: [], photos: [] },
  { id: 'denver', name: 'Denver', location: 'United States', region: 'america', lat: 39.74, lon: -104.99, notes: [], sights: [], photos: [] },
  { id: 'new-orleans', name: 'New Orleans', location: 'United States', region: 'america', lat: 29.95, lon: -90.07, notes: [], sights: [], photos: [] },
  { id: 'las-vegas', name: 'Las Vegas', location: 'United States', region: 'america', lat: 36.17, lon: -115.14, notes: [], sights: [], photos: [] },
  { id: 'seattle', name: 'Seattle', location: 'United States', region: 'america', lat: 47.61, lon: -122.33, notes: [], sights: [], photos: [] },
  { id: 'vancouver', name: 'Vancouver', location: 'Canada', region: 'america', lat: 49.28, lon: -123.12, notes: [], sights: [], photos: [] },
  { id: 'bay-area', name: 'Bay Area', location: 'California, United States', region: 'america', lat: 37.8, lon: -122.3, notes: [], sights: [], photos: [{ src: 'assets/travel/img_6819.jpg', hdrSrc: 'assets/travel/img_6819-hdr.jpg', alt: 'Sunlight filtering through tall redwood trees', comment: 'Redwoods, Muir Woods National Monument, CA (2025)' }] },
  { id: 'michigan', name: 'Michigan', location: 'United States', region: 'america', lat: 44.3, lon: -85.6, notes: [], sights: [], photos: [] },
  { id: 'nashville', name: 'Nashville', location: 'Tennessee, United States', region: 'america', lat: 36.16, lon: -86.78, notes: [], sights: [], photos: [{ src: 'assets/travel/img_6115.jpg', hdrSrc: 'assets/travel/img_6115-hdr.jpg', alt: 'A resting kangaroo beside a sign asking visitors to let it sleep', comment: 'Please Let Me Sleep, Nashville Zoo at Grassmere, Nashville, TN (2025)' }] },
  { id: 'arizona', name: 'Arizona', location: 'United States', region: 'america', lat: 34.3, lon: -111.7, notes: [], sights: [], photos: [{ src: 'assets/travel/img_9327.jpg', alt: 'An Arizona welcome sign beside a rocky desert hillside', comment: '' }, { src: 'assets/travel/img_9454.jpg', alt: 'Orange sunset over layered canyon cliffs', comment: '' }] },
  { id: 'rome', name: 'Rome', location: 'Italy', region: 'europe', lat: 41.90, lon: 12.50, notes: [], sights: [], photos: [] },
  { id: 'florence', name: 'Florence', location: 'Italy', region: 'europe', lat: 43.77, lon: 11.26, notes: [], sights: [], photos: [] },
  { id: 'milan', name: 'Milan', location: 'Italy', region: 'europe', lat: 45.46, lon: 9.19, notes: [], sights: [], photos: [] },
  { id: 'vienna', name: 'Vienna', location: 'Austria', region: 'europe', lat: 48.21, lon: 16.37, notes: [], sights: [], photos: [] },
  { id: 'budapest', name: 'Budapest', location: 'Hungary', region: 'europe', lat: 47.50, lon: 19.04, notes: [], sights: [], photos: [] },
  { id: 'hokkaido', name: 'Hokkaido', location: 'Japan', region: 'asia', lat: 43.4, lon: 142.5, notes: [], sights: [], photos: [] },
  { id: 'tokyo', name: 'Tokyo', location: 'Japan', region: 'asia', lat: 35.68, lon: 139.69, notes: [], sights: [], photos: [] },
  { id: 'osaka', name: 'Osaka', location: 'Japan', region: 'asia', lat: 34.69, lon: 135.50, notes: [], sights: [], photos: [] },
  { id: 'kyoto', name: 'Kyoto', location: 'Japan', region: 'asia', lat: 35.01, lon: 135.77, notes: [], sights: [], photos: [] },
  { id: 'nara', name: 'Nara', location: 'Japan', region: 'asia', lat: 34.69, lon: 135.80, notes: [], sights: [], photos: [] },
  { id: 'kanazawa', name: 'Kanazawa', location: 'Japan', region: 'asia', lat: 36.56, lon: 136.66, notes: [], sights: [], photos: [] },
  { id: 'nikko', name: 'Nikko', location: 'Japan', region: 'asia', lat: 36.75, lon: 139.60, notes: [], sights: [], photos: [] },
  { id: 'fukuoka', name: 'Fukuoka', location: 'Japan', region: 'asia', lat: 33.59, lon: 130.40, notes: [], sights: [], photos: [] },
  { id: 'taipei', name: 'Taipei', location: 'Taiwan', region: 'asia', lat: 25.03, lon: 121.57, notes: [], sights: [], photos: [] },
  { id: 'israel', name: 'Israel', location: 'Middle East', region: 'middle-east', lat: 31.4, lon: 34.9, notes: [], sights: [], photos: [] },
];

(() => {
  const map = document.getElementById('travel-map');
  const markers = document.getElementById('travel-markers');
  const entry = document.getElementById('travel-entry');
  const body = document.getElementById('travel-entry-body');
  const regionButtons = document.querySelectorAll('[data-region]');
  const mobilePlaces = document.querySelector('.mobile-travel-places');
  regionButtons.forEach((button) => {
    if (button.dataset.region === 'world') return;
    const places = travelPlaces.filter((place) => place.region === button.dataset.region);
    const group = document.createElement('div');
    group.className = 'mobile-travel-region';
    const heading = document.createElement('h3');
    heading.textContent = button.textContent;
    const count = document.createElement('span');
    count.textContent = String(places.length).padStart(2, '0');
    heading.append(count);
    const links = document.createElement('div');
    links.className = 'mobile-travel-links';
    places.forEach((place) => {
      const link = document.createElement('a');
      link.href = '#travel-entry';
      link.dataset.place = place.id;
      link.textContent = place.name;
      links.append(link);
    });
    group.append(heading, links);
    mobilePlaces.append(group);
  });
  mobilePlaces.hidden = false;
  const views = {
    world: [0, 0, 1000, 450],
    america: [125, 75, 240, 108],
    europe: [480, 77, 130, 58.5],
    asia: [790, 95, 185, 83.25],
    'middle-east': [565, 117, 95, 42.75],
  };
  const tooltip = document.getElementById('map-tooltip');
  function showPlaceName(marker, place) {
    tooltip.textContent = place.name;
    tooltip.hidden = false;
    const pin = marker.querySelector('.marker-dot').getBoundingClientRect();
    const bounds = map.getBoundingClientRect();
    const half = tooltip.offsetWidth / 2;
    tooltip.style.left = `${Math.max(half + 6, Math.min(bounds.width - half - 6, pin.x + pin.width / 2 - bounds.x))}px`;
    tooltip.style.top = `${pin.y - bounds.y - 9}px`;
  }
  function hidePlaceName() { tooltip.hidden = true; }
  map.addEventListener('keydown', (event) => { if (event.key === 'Escape') hidePlaceName(); });
  window.addEventListener('resize', hidePlaceName);
  const svgNS = 'http://www.w3.org/2000/svg';
  const home = document.getElementById('travel-home');

  function sizeHomeMarker() {
    // A representative location in South Korea; keep the icon readable on mobile.
    const scale = map.viewBox.baseVal.width / (map.clientWidth || 1000);
    home.setAttribute('transform', `translate(855 134.72) scale(${scale})`);
  }
  new ResizeObserver(sizeHomeMarker).observe(map);

  function svgElement(tag, attributes) {
    const element = document.createElementNS(svgNS, tag);
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    return element;
  }

  travelPlaces.forEach((place) => {
    const marker = svgElement('a', {
      href: '#travel-entry',
      'data-place': place.id,
      'aria-label': `${place.name}, ${place.location}: travel notes`,
      class: 'travel-marker',
    });
    const title = svgElement('title', {});
    title.textContent = place.name;
    marker.append(title);
    marker.append(svgElement('circle', { r: 18, class: 'marker-hit' }));
    marker.append(svgElement('circle', { r: 10, class: 'marker-halo' }));
    marker.append(svgElement('circle', { r: 4.5, class: 'marker-dot' }));
    markers.append(marker);
    marker.addEventListener('pointerenter', () => showPlaceName(marker, place));
    marker.addEventListener('pointerleave', hidePlaceName);
    marker.addEventListener('focus', () => showPlaceName(marker, place));
    marker.addEventListener('blur', hidePlaceName);
  });

  function setRegion(region) {
    hidePlaceName();
    const view = views[region];
    map.setAttribute('viewBox', view.join(' '));
    home.style.display = region === 'world' || region === 'asia' ? '' : 'none';
    sizeHomeMarker();
    regionButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.region === region));
    });
    document.querySelector('.ocean-labels').style.display = region === 'world' ? '' : 'none';
    // Hide zoomed-out markers from keyboard navigation as well as the viewport.
    markers.querySelectorAll('[data-place]').forEach((marker) => {
      const place = travelPlaces.find((item) => item.id === marker.dataset.place);
      const x = (place.lon + 180) * 1000 / 360;
      const y = (85 - place.lat) * 1000 / 360;
      marker.setAttribute('transform', `translate(${x} ${y}) scale(${view[2] / 1000})`);
      marker.style.display = region === 'world' || place.region === region ? '' : 'none';
    });
  }

  function appendText(tag, text, parent = body, className = '') {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    parent.append(element);
    return element;
  }

  const hdrDisplay = matchMedia('(dynamic-range: high)');
  const photoImage = document.getElementById('travel-photo');
  const photoEmpty = document.getElementById('travel-photo-empty');
  const photoControls = document.querySelector('.travel-photo-controls');
  const showAll = document.getElementById('travel-show-all');
  const carousel = document.querySelector('.travel-carousel');
  let photos = [];
  let photoIndex = 0;
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let timer;

  function scheduleSlide() {
    clearTimeout(timer);
    const running = !motionPreference.matches && !carousel.contains(document.activeElement)
      && inView && !document.hidden && photos.length > 1;
    document.getElementById('travel-photo-count').setAttribute('aria-live', running ? 'off' : 'polite');
    if (running) timer = setTimeout(() => stepPhoto(1), 20000);
  }
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
    scheduleSlide();
  }, { threshold: [0, 0.35] }).observe(document.querySelector('.travel-photo-stage'));
  document.addEventListener('visibilitychange', scheduleSlide);
  motionPreference.addEventListener('change', scheduleSlide);
  carousel.addEventListener('focusin', scheduleSlide);
  carousel.addEventListener('focusout', () => {
    // Wait until focus moves before deciding whether to resume autoplay.
    queueMicrotask(scheduleSlide);
  });

  function renderPhoto() {
    const photo = photos[photoIndex];
    photoImage.hidden = !photo;
    photoEmpty.hidden = Boolean(photo);
    photoEmpty.textContent = 'Photos coming soon.';
    photoControls.hidden = !photo;
    document.querySelector('.travel-photo-arrows').hidden = photos.length < 2;
    const comment = document.getElementById('travel-photo-comment');
    comment.textContent = photo?.comment || '';
    comment.hidden = !photo?.comment;
    document.getElementById('travel-photo-prev').disabled = photos.length < 2;
    document.getElementById('travel-photo-next').disabled = photos.length < 2;
    document.getElementById('travel-photo-count').textContent = photo ? `${photoIndex + 1} / ${photos.length}` : '';
    document.getElementById('travel-photo-caption').textContent = photo
      ? [photo.placeName, photo.caption].filter(Boolean).join(' · ') : '';
    if (photo) {
      photoImage.alt = photo.alt || `Travel photo from ${photo.placeName}`;
      photoImage.src = hdrDisplay.matches && photo.hdrSrc ? photo.hdrSrc : photo.src;
    } else {
      photoImage.removeAttribute('src');
      photoImage.alt = '';
      photoImage.parentElement.style.removeProperty('--photo-ratio');
      entry.style.removeProperty('--album-ratio');
    }
    scheduleSlide();
  }

  photoImage.addEventListener('load', () => {
    photoImage.parentElement.style.setProperty('--photo-ratio', photoImage.naturalWidth / photoImage.naturalHeight);
    entry.style.setProperty('--album-ratio', photoImage.naturalWidth / photoImage.naturalHeight);
  });

  hdrDisplay.addEventListener('change', renderPhoto);

  photoImage.addEventListener('error', () => {
    const photo = photos[photoIndex];
    if (photo?.hdrSrc && photoImage.getAttribute('src') === photo.hdrSrc) {
      photoImage.src = photo.src;
      return;
    }
    photoImage.parentElement.style.removeProperty('--photo-ratio');
      entry.style.removeProperty('--album-ratio');
    photoImage.hidden = true;
    photoEmpty.hidden = false;
    photoEmpty.textContent = 'This photo could not be loaded.';
  });

  function stepPhoto(direction) {
    if (photos.length < 2) return;
    photoIndex = (photoIndex + direction + photos.length) % photos.length;
    renderPhoto();
  }
  document.getElementById('travel-photo-prev').addEventListener('click', () => stepPhoto(-1));
  document.getElementById('travel-photo-next').addEventListener('click', () => stepPhoto(1));
  carousel.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    stepPhoto(event.key === 'ArrowLeft' ? -1 : 1);
  });
  let touchStart = null;
  carousel.addEventListener('touchstart', (event) => {
    touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  carousel.addEventListener('touchcancel', () => { touchStart = null; });
  carousel.addEventListener('touchend', (event) => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) stepPhoto(dx < 0 ? 1 : -1);
    touchStart = null;
  }, { passive: true });

  function selectPlace(place = null, focusEntry = false) {
    document.querySelectorAll('[data-place]').forEach((link) => {
      if (link.dataset.place === place?.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    document.getElementById('travel-entry-meta').textContent = place?.location || 'Travel photos';
    document.getElementById('travel-entry-title').textContent = place?.name || 'All photos';
    document.getElementById('travel-entry-meta').hidden = !place;
    showAll.hidden = !place;
    photos = (place ? [place] : travelPlaces).flatMap((destination) =>
      destination.photos.map((photo) => ({ ...photo, placeName: destination.name })));
    photoIndex = 0;
    renderPhoto();
    body.replaceChildren();
    if (place) {
      if (place.date) appendText('p', place.date, body, 'travel-entry-date');
      place.notes.forEach((paragraph) => appendText('p', paragraph));
      if (place.sights.length) {
        appendText('h4', 'Places & moments');
        const list = document.createElement('ul');
        place.sights.forEach((sight) => appendText('li', sight, list));
        body.append(list);
      }
    }
    setRegion(place?.region || 'world');
    if (focusEntry) entry.focus({ preventScroll: true });
  }

  showAll.addEventListener('click', () => {
    selectPlace(null, true);
    history.replaceState(null, '', '#blog');
  });

  document.querySelectorAll('[data-place]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const place = travelPlaces.find((item) => item.id === link.dataset.place);
      selectPlace(place, true);
      history.replaceState(null, '', `#travel-${place.id}`);
      // Keep the selected entry in view on small screens and for keyboard users.
      entry.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
    });
  });

  regionButtons.forEach((button) => button.addEventListener('click', () => setRegion(button.dataset.region)));
  document.querySelector('.atlas-regions').hidden = false;
  document.querySelector('.atlas-hint').textContent = 'Hover to explore · Click to view photos';
  selectPlace();

  function restorePlace() {
    const place = travelPlaces.find((item) => `#travel-${item.id}` === location.hash);
    if (place) {
      selectPlace(place);
      entry.scrollIntoView({ block: 'nearest' });
    } else {
      selectPlace();
    }
  }
  restorePlace();
  window.addEventListener('hashchange', restorePlace);
})();
