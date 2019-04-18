module.exports = function (grunt) {
    const is_travis_cd = process.env.TRAVIS === 'true' && process.env.TRAVIS_PULL_REQUEST === 'false';
    const origin_with_auth = `https://${process.env.GHT}@github.com/${process.env.TRAVIS_REPO_SLUG}.git`;

    return {
        main: {
            options: {
                add    : (grunt.option('cleanup') ? false : true),
                base   : 'dist',
                branch : 'gh-pages',
                repo   : is_travis_cd ? origin_with_auth : undefined,
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
