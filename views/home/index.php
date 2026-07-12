<main>
        <section class="hero">

    <div class="container hero-content">

        <!-- LEFT SIDE -->

        <div class="hero-left">

            <span class="hero-label">
                ❤️ Welcome to LoveLink
            </span>

            <h1>
                Where Names
                <span>Meet Destiny.</span>
            </h1>

            <p class="hero-description">

                Rediscover the nostalgic FLAMES game with a beautifully crafted
                notebook-inspired experience. Enter two names and let destiny
                reveal your relationship in the most playful way.

            </p>

            <p class="handwritten-note">

                "Every love story begins with two names."

            </p>

            <div class="hero-tags">

                <span>📖 Vintage</span>

                <span>❤️ FLAMES</span>

                <span>✨ Memories</span>

            </div>

            <a href="#calculator" class="hero-btn">

                ❤️ Calculate Now

            </a>

        </div>

        <!-- RIGHT SIDE -->

        <div class="hero-right">

            <div class="sticky-note">

                <div class="tape"></div>

                <p>

                    Do you
                    like me?

                </p>

                <small>

                    Circle
                    <strong>YES</strong>
                    or
                    <strong>NO</strong>

                    ❤️

                </small>

            </div>

        </div>

    </div>

        </section>

        <section class="calculator" id="calculator">

    <div class="calculator-wrapper">

        <h2>Calculate Your Destiny</h2>

        <p class="calculator-subtitle">
            Two names. One destiny.
        </p>

        <form class="flames-form" id="flames-form">

    <div class="input-field">

        <label for="person-one">Your Name</label>

        <input
            type="text"
            id="person-one"
            placeholder="Write your name..."
        >
        <div class="error-message" id="person-one-error"></div>
    
    </div>

    <div class="input-field">

        <label for="person-two">Partner's Name</label>

        <input
            type="text"
            id="person-two"
            placeholder="Write their name..."
        >
        <div class="error-message" id="person-two-error"></div>
   
    </div>

    <button
        type="submit"
        id="calculate-btn">

        Calculate Destiny

    </button>

</form>
        <div id="flames-animation" class="flames-animation">

            <div class="animation-header">

                <h3>FLAMES Elimination</h3>

            </div>

            <div id="letters-container" class="letters-container">

                <span data-letter="F">F</span>
                <span data-letter="L">L</span>
                <span data-letter="A">A</span>
                <span data-letter="M">M</span>
                <span data-letter="E">E</span>
                <span data-letter="S">S</span>

            </div>

        </div>

        </section>
    <?php include 'result.php'; ?>
</main>