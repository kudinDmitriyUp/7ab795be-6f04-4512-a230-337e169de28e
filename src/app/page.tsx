"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Studio",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
      ]}
      brandName="Basya"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Basya Studio"
      description="Crafting floral memories with organic elegance and intentional design."
      buttons={[
        {
          text: "Explore Collection",
          href: "#products",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-flower-cup-spring-wallpaper_23-2149446791.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-model-holding-beautiful-bouquet_23-2148442595.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-bride-looks-dark-red-wedding-bouquet_8353-9006.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-making-beautiful-floral-bouquet_23-2148846498.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-vase-with-white-pink-flower_23-2147601267.jpg",
          imageAlt: "elegant floral bouquet professional photography",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Artisan Floral Studio"
      description="Basya Studio believes in the quiet power of nature. We meticulously source seasonal stems to create arrangements that tell your unique stories with grace and organic beauty."
      metrics={[
        {
          value: "500+",
          title: "Bouquets Designed",
        },
        {
          value: "12",
          title: "Sustainable Farms",
        },
        {
          value: "98%",
          title: "Customer Joy",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-female-artisan-pressing-flowers_23-2150306305.jpg"
      imageAlt="professional florist arranging flowers in studio"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Spring Awakening",
          price: "$85",
          variant: "Seasonal Bouquet",
          imageSrc: "http://img.b2bpic.net/free-photo/flower-bouquet-wooden-stand-with-candies-candles_114579-2064.jpg",
        },
        {
          id: "2",
          name: "Midnight Roses",
          price: "$120",
          variant: "Premium Roses",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-various-dried-yellow-flowers_53876-71241.jpg",
        },
        {
          id: "3",
          name: "Rustic Wildflower",
          price: "$65",
          variant: "Dried Decor",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-flower-placed-painted-vase_23-2148096305.jpg",
        },
        {
          id: "4",
          name: "Elegant Peonies",
          price: "$95",
          variant: "Ceremony Piece",
          imageSrc: "http://img.b2bpic.net/free-photo/bouquet-deep-light-pink-peonies-standing-door_114579-2097.jpg",
        },
        {
          id: "5",
          name: "Eucalyptus Dream",
          price: "$75",
          variant: "Greenery Set",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-beautiful-small-flower-bouquet-wooden-surface_181624-38109.jpg",
        },
        {
          id: "6",
          name: "Sunny Tulips",
          price: "$55",
          variant: "Daily Bloom",
          imageSrc: "http://img.b2bpic.net/free-photo/florist-makes-beautiful-bouquet-studio_1157-28414.jpg",
        },
      ]}
      title="Seasonal Collection"
      description="Curated arrangements tailored for life's most precious moments."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Basya Studio created the most breathtaking arrangements for our special day. The attention to detail and artistic vision is unmatched."
      rating={5}
      author="Elena M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiley-woman-gardening-indoors_23-2148509872.jpg",
          alt: "happy customer holding flower bouquet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-florist-working-place_23-2147762217.jpg",
          alt: "happy customer holding flower bouquet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-people-celebrating-mother-s-day_23-2151207271.jpg",
          alt: "happy customer holding flower bouquet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-bald-caucasian-man-pink-hoodie-isolated-hold-bouquet-flowers-happy-smiling_343596-4849.jpg",
          alt: "happy customer holding flower bouquet",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-short-hair-holding-bouquet-flowers-looking-flowers-happy-pleased-smiling-cheerfully-celebrating-international-women-s-day-march-8-standing-green-background_141793-110705.jpg",
          alt: "happy customer holding flower bouquet",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have a specific vision in mind? Let's discuss your floral dreams for your next event or personal arrangement."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Tell us about your event or floral needs...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/concentrated-worker-making-floral-composition_23-2147761052.jpg"
      imageAlt="Concentrated worker making floral composition"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Collection",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Pinterest",
              href: "#",
            },
            {
              label: "Shipping Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Basya Studio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
