export default function JsonLd() {
    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Fire Blocker Otomatik Yangın Söndürücü",
        description:
            "Otomatik yangın algılama ve söndürme sistemi. 3 saniyede devreye giren, %99.9 etkili, 10 yıl raf ömrüne sahip kompakt yangın söndürücü.",
        brand: {
            "@type": "Brand",
            name: "Fire Blocker",
        },
        offers: {
            "@type": "Offer",
            price: "499",
            priceCurrency: "TRY",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Fire Blocker",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "150",
        },
    };

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Fire Blocker",
        url: "https://fireblocker.com",
        logo: "https://fireblocker.com/images/logo.png",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+90-850-123-4567",
            contactType: "customer service",
            availableLanguage: "Turkish",
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "Mahmutbey Mahallesi, 2427. Sokak, 144 Bağcılar",
            addressLocality: "İstanbul",
            addressCountry: "TR",
            postalCode: "34000",
        },
        sameAs: [
            "https://www.facebook.com/fireblocker",
            "https://www.instagram.com/fireblocker",
            "https://www.twitter.com/fireblocker",
            "https://www.linkedin.com/company/fireblocker",
        ],
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Fire Blocker nasıl çalışır?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fire Blocker yangını otomatik olarak algılar ve 3 saniye içinde devreye girerek yangını söndürür. İnsan müdahalesi gerektirmez.",
                },
            },
            {
                "@type": "Question",
                name: "Fire Blocker'ın raf ömrü ne kadardır?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fire Blocker'ın raf ömrü 10 yıldır. -50°C ile +90°C arasındaki sıcaklıklarda çalışabilir.",
                },
            },
            {
                "@type": "Question",
                name: "Fire Blocker elektrik yangınlarında kullanılabilir mi?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Evet, Fire Blocker elektrik panolarında ve cihazlarda güvenle kullanılabilir. Herhangi bir hasara yol açmaz.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd),
                }}
            />
        </>
    );
}
