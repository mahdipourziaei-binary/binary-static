module.exports = function (grunt) {
    const skip_cd = process.env.TRAVIS_COMMIT_MESSAGE.match(/\[skip cd\]/ig);
    const is_travis_cd = process.env.TRAVIS === 'true'
                         && process.env.TRAVIS_PULL_REQUEST === 'false'
                         && process.env.GHT;
    const origin_with_auth = is_travis_cd && !skip_cd ?
        `https://${process.env.GHT}@github.com/${process.env.TRAVIS_REPO_SLUG}.git`
        : undefined;

    return {
        main: {
            options: {
                add    : (grunt.option('cleanup') ? false : true),
                base   : 'dist',
                branch : 'gh-pages',
                repo   : origin_with_auth,
                silent : is_travis_cd, // Has to be silent to avoid potential leak
                message: global.is_release ? `Release to ${global.release_target}` : `Deploy to ${global.branch || 'gh-pages'}`,
                ...(global.is_release && {
                    repo : global.release_info.target_repo,
                    clone: global.release_info.clone_folder,
                }),
            },
            src: global.branch ? [global.branch_prefix + global.branch + '/**'] : ['**', '!' + (global.branch_prefix || 'br_') + '*/**']
        },
        trigger_tests: {
            options: {
                add    : true,
                base   : 'dist',
                branch : 'master',
                repo   : 'git@github.com:binary-com/robot-framework.git',
                message: 'Trigger tests',
            },
            src: grunt.option('staging') ? 'version' : '',
        },
    }
};
