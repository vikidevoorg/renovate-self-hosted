module.exports = {
  branchPrefix: 'renovate/',
  onboarding: true,
  //username: 'renovate-release',
  //gitAuthor: 'VikiRenovate Bot <bot@renovateapp.com>',
  repositories: ['vikidevoorg/python-monorepo', 'hclpandv/my-vagrant-projects'],
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": [
      "github>vikidevoorg/renovate-config"
    ]
  },
  platform: 'github',
  forkProcessing: "enabled",
  dependencyDashboardAutoclose: true,
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      minimumReleaseAge: null,
    },
  ],
};
